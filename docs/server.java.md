# `server` Submodule <a name="`server` Submodule" id="@cdktf/provider-upcloud.server"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Server <a name="Server" id="@cdktf/provider-upcloud.server.Server"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server upcloud_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.server.Server.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.server.Server;

Server.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .hostname(java.lang.String)
    .zone(java.lang.String)
//  .bootOrder(java.lang.String)
//  .cpu(java.lang.Number)
//  .firewall(java.lang.Boolean)
//  .firewall(IResolvable)
//  .host(java.lang.Number)
//  .hotResize(java.lang.Boolean)
//  .hotResize(IResolvable)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .login(IResolvable)
//  .login(java.util.List<ServerLogin>)
//  .mem(java.lang.Number)
//  .metadata(java.lang.Boolean)
//  .metadata(IResolvable)
//  .networkInterface(IResolvable)
//  .networkInterface(java.util.List<ServerNetworkInterface>)
//  .nicModel(java.lang.String)
//  .plan(java.lang.String)
//  .serverGroup(java.lang.String)
//  .simpleBackup(IResolvable)
//  .simpleBackup(java.util.List<ServerSimpleBackup>)
//  .storageDevices(IResolvable)
//  .storageDevices(java.util.List<ServerStorageDevices>)
//  .tags(java.util.List<java.lang.String>)
//  .template(IResolvable)
//  .template(java.util.List<ServerTemplate>)
//  .timezone(java.lang.String)
//  .title(java.lang.String)
//  .userData(java.lang.String)
//  .videoModel(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.hostname">hostname</a></code> | <code>java.lang.String</code> | The hostname of the server. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.zone">zone</a></code> | <code>java.lang.String</code> | The zone in which the server will be hosted, e.g. `de-fra1`. You can list available zones with `upctl zone list`. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.bootOrder">bootOrder</a></code> | <code>java.lang.String</code> | The boot device order, `cdrom`\|`disk`\|`network` or comma separated combination of those values. Defaults to `disk`. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.cpu">cpu</a></code> | <code>java.lang.Number</code> | The number of CPU cores for the server. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.firewall">firewall</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Are firewall rules active for the server. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.host">host</a></code> | <code>java.lang.Number</code> | Use this to start the VM on a specific host. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.hotResize">hotResize</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, allows changing the server plan without requiring a reboot. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User defined key-value pairs to classify the server. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.login">login</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerLogin">ServerLogin</a>></code> | login block. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.mem">mem</a></code> | <code>java.lang.Number</code> | The amount of memory for the server (in megabytes). |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.metadata">metadata</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Is metadata service active for the server. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.networkInterface">networkInterface</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface">ServerNetworkInterface</a>></code> | network_interface block. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.nicModel">nicModel</a></code> | <code>java.lang.String</code> | The model of the server's network interfaces. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.plan">plan</a></code> | <code>java.lang.String</code> | The pricing plan used for the server. You can list available server plans with `upctl server plans`. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.serverGroup">serverGroup</a></code> | <code>java.lang.String</code> | The UUID of a server group to attach this server to. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.simpleBackup">simpleBackup</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerSimpleBackup">ServerSimpleBackup</a>></code> | simple_backup block. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.storageDevices">storageDevices</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerStorageDevices">ServerStorageDevices</a>></code> | storage_devices block. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | The server related tags. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.template">template</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerTemplate">ServerTemplate</a>></code> | template block. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.timezone">timezone</a></code> | <code>java.lang.String</code> | The timezone of the server. The timezone must be a valid timezone string, e.g. `Europe/Helsinki`. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.title">title</a></code> | <code>java.lang.String</code> | A short, informational description of the server. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.userData">userData</a></code> | <code>java.lang.String</code> | Defines URL for a server setup script, or the script body itself. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.videoModel">videoModel</a></code> | <code>java.lang.String</code> | The model of the server's video interface. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.hostname"></a>

- *Type:* java.lang.String

The hostname of the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#hostname Server#hostname}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.zone"></a>

- *Type:* java.lang.String

The zone in which the server will be hosted, e.g. `de-fra1`. You can list available zones with `upctl zone list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#zone Server#zone}

---

##### `bootOrder`<sup>Optional</sup> <a name="bootOrder" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.bootOrder"></a>

- *Type:* java.lang.String

The boot device order, `cdrom`|`disk`|`network` or comma separated combination of those values. Defaults to `disk`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#boot_order Server#boot_order}

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.cpu"></a>

- *Type:* java.lang.Number

The number of CPU cores for the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#cpu Server#cpu}

---

##### `firewall`<sup>Optional</sup> <a name="firewall" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.firewall"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Are firewall rules active for the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#firewall Server#firewall}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.host"></a>

- *Type:* java.lang.Number

Use this to start the VM on a specific host.

Refers to value from host -attribute. Only available for private cloud hosts

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#host Server#host}

---

##### `hotResize`<sup>Optional</sup> <a name="hotResize" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.hotResize"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, allows changing the server plan without requiring a reboot.

This enables hot resizing of the server. If hot resizing fails, the apply operation will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#hot_resize Server#hot_resize}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User defined key-value pairs to classify the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#labels Server#labels}

---

##### `login`<sup>Optional</sup> <a name="login" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.login"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerLogin">ServerLogin</a>>

login block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#login Server#login}

---

##### `mem`<sup>Optional</sup> <a name="mem" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.mem"></a>

- *Type:* java.lang.Number

The amount of memory for the server (in megabytes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#mem Server#mem}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.metadata"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Is metadata service active for the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#metadata Server#metadata}

---

##### `networkInterface`<sup>Optional</sup> <a name="networkInterface" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.networkInterface"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface">ServerNetworkInterface</a>>

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#network_interface Server#network_interface}

---

##### `nicModel`<sup>Optional</sup> <a name="nicModel" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.nicModel"></a>

- *Type:* java.lang.String

The model of the server's network interfaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#nic_model Server#nic_model}

---

##### `plan`<sup>Optional</sup> <a name="plan" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.plan"></a>

- *Type:* java.lang.String

The pricing plan used for the server. You can list available server plans with `upctl server plans`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#plan Server#plan}

---

##### `serverGroup`<sup>Optional</sup> <a name="serverGroup" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.serverGroup"></a>

- *Type:* java.lang.String

The UUID of a server group to attach this server to.

Note that the server can also be attached to a server group via the `members` property of `upcloud_server_group`. Only one of the these should be defined at a time. This value is only updated if it has been set to non-zero value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#server_group Server#server_group}

---

##### `simpleBackup`<sup>Optional</sup> <a name="simpleBackup" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.simpleBackup"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerSimpleBackup">ServerSimpleBackup</a>>

simple_backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#simple_backup Server#simple_backup}

---

##### `storageDevices`<sup>Optional</sup> <a name="storageDevices" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.storageDevices"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerStorageDevices">ServerStorageDevices</a>>

storage_devices block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#storage_devices Server#storage_devices}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

The server related tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#tags Server#tags}

---

##### `template`<sup>Optional</sup> <a name="template" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.template"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerTemplate">ServerTemplate</a>>

template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#template Server#template}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.timezone"></a>

- *Type:* java.lang.String

The timezone of the server. The timezone must be a valid timezone string, e.g. `Europe/Helsinki`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#timezone Server#timezone}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.title"></a>

- *Type:* java.lang.String

A short, informational description of the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#title Server#title}

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.userData"></a>

- *Type:* java.lang.String

Defines URL for a server setup script, or the script body itself.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#user_data Server#user_data}

---

##### `videoModel`<sup>Optional</sup> <a name="videoModel" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.videoModel"></a>

- *Type:* java.lang.String

The model of the server's video interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#video_model Server#video_model}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.Server.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.server.Server.putLogin">putLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.putNetworkInterface">putNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.putSimpleBackup">putSimpleBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.putStorageDevices">putStorageDevices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.putTemplate">putTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetBootOrder">resetBootOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetCpu">resetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetFirewall">resetFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetHotResize">resetHotResize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetLogin">resetLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetMem">resetMem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetNetworkInterface">resetNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetNicModel">resetNicModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetPlan">resetPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetServerGroup">resetServerGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetSimpleBackup">resetSimpleBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetStorageDevices">resetStorageDevices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetTemplate">resetTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetTimezone">resetTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetTitle">resetTitle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetUserData">resetUserData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetVideoModel">resetVideoModel</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.server.Server.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-upcloud.server.Server.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.server.Server.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.server.Server.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-upcloud.server.Server.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.server.Server.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-upcloud.server.Server.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-upcloud.server.Server.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-upcloud.server.Server.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-upcloud.server.Server.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-upcloud.server.Server.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.server.Server.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.server.Server.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.Server.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.server.Server.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.Server.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.server.Server.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.Server.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.server.Server.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.Server.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.server.Server.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.Server.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.server.Server.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.Server.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.server.Server.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.Server.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.server.Server.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.Server.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.server.Server.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.Server.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-upcloud.server.Server.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-upcloud.server.Server.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.server.Server.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.server.Server.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.server.Server.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.Server.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-upcloud.server.Server.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.server.Server.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-upcloud.server.Server.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.server.Server.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.server.Server.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-upcloud.server.Server.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.server.Server.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLogin` <a name="putLogin" id="@cdktf/provider-upcloud.server.Server.putLogin"></a>

```java
public void putLogin(IResolvable OR java.util.List<ServerLogin> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.server.Server.putLogin.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerLogin">ServerLogin</a>>

---

##### `putNetworkInterface` <a name="putNetworkInterface" id="@cdktf/provider-upcloud.server.Server.putNetworkInterface"></a>

```java
public void putNetworkInterface(IResolvable OR java.util.List<ServerNetworkInterface> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.server.Server.putNetworkInterface.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface">ServerNetworkInterface</a>>

---

##### `putSimpleBackup` <a name="putSimpleBackup" id="@cdktf/provider-upcloud.server.Server.putSimpleBackup"></a>

```java
public void putSimpleBackup(IResolvable OR java.util.List<ServerSimpleBackup> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.server.Server.putSimpleBackup.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerSimpleBackup">ServerSimpleBackup</a>>

---

##### `putStorageDevices` <a name="putStorageDevices" id="@cdktf/provider-upcloud.server.Server.putStorageDevices"></a>

```java
public void putStorageDevices(IResolvable OR java.util.List<ServerStorageDevices> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.server.Server.putStorageDevices.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerStorageDevices">ServerStorageDevices</a>>

---

##### `putTemplate` <a name="putTemplate" id="@cdktf/provider-upcloud.server.Server.putTemplate"></a>

```java
public void putTemplate(IResolvable OR java.util.List<ServerTemplate> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.server.Server.putTemplate.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerTemplate">ServerTemplate</a>>

---

##### `resetBootOrder` <a name="resetBootOrder" id="@cdktf/provider-upcloud.server.Server.resetBootOrder"></a>

```java
public void resetBootOrder()
```

##### `resetCpu` <a name="resetCpu" id="@cdktf/provider-upcloud.server.Server.resetCpu"></a>

```java
public void resetCpu()
```

##### `resetFirewall` <a name="resetFirewall" id="@cdktf/provider-upcloud.server.Server.resetFirewall"></a>

```java
public void resetFirewall()
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-upcloud.server.Server.resetHost"></a>

```java
public void resetHost()
```

##### `resetHotResize` <a name="resetHotResize" id="@cdktf/provider-upcloud.server.Server.resetHotResize"></a>

```java
public void resetHotResize()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-upcloud.server.Server.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLogin` <a name="resetLogin" id="@cdktf/provider-upcloud.server.Server.resetLogin"></a>

```java
public void resetLogin()
```

##### `resetMem` <a name="resetMem" id="@cdktf/provider-upcloud.server.Server.resetMem"></a>

```java
public void resetMem()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-upcloud.server.Server.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetNetworkInterface` <a name="resetNetworkInterface" id="@cdktf/provider-upcloud.server.Server.resetNetworkInterface"></a>

```java
public void resetNetworkInterface()
```

##### `resetNicModel` <a name="resetNicModel" id="@cdktf/provider-upcloud.server.Server.resetNicModel"></a>

```java
public void resetNicModel()
```

##### `resetPlan` <a name="resetPlan" id="@cdktf/provider-upcloud.server.Server.resetPlan"></a>

```java
public void resetPlan()
```

##### `resetServerGroup` <a name="resetServerGroup" id="@cdktf/provider-upcloud.server.Server.resetServerGroup"></a>

```java
public void resetServerGroup()
```

##### `resetSimpleBackup` <a name="resetSimpleBackup" id="@cdktf/provider-upcloud.server.Server.resetSimpleBackup"></a>

```java
public void resetSimpleBackup()
```

##### `resetStorageDevices` <a name="resetStorageDevices" id="@cdktf/provider-upcloud.server.Server.resetStorageDevices"></a>

```java
public void resetStorageDevices()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-upcloud.server.Server.resetTags"></a>

```java
public void resetTags()
```

##### `resetTemplate` <a name="resetTemplate" id="@cdktf/provider-upcloud.server.Server.resetTemplate"></a>

```java
public void resetTemplate()
```

##### `resetTimezone` <a name="resetTimezone" id="@cdktf/provider-upcloud.server.Server.resetTimezone"></a>

```java
public void resetTimezone()
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-upcloud.server.Server.resetTitle"></a>

```java
public void resetTitle()
```

##### `resetUserData` <a name="resetUserData" id="@cdktf/provider-upcloud.server.Server.resetUserData"></a>

```java
public void resetUserData()
```

##### `resetVideoModel` <a name="resetVideoModel" id="@cdktf/provider-upcloud.server.Server.resetVideoModel"></a>

```java
public void resetVideoModel()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.Server.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Server resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-upcloud.server.Server.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.server.Server;

Server.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.server.Server.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-upcloud.server.Server.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.server.Server;

Server.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.server.Server.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-upcloud.server.Server.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.server.Server;

Server.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.server.Server.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-upcloud.server.Server.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.server.Server;

Server.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Server.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Server resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.server.Server.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.server.Server.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Server to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.server.Server.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Server that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.server.Server.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Server to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.login">login</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerLoginList">ServerLoginList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.networkInterface">networkInterface</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList">ServerNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.simpleBackup">simpleBackup</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupList">ServerSimpleBackupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.storageDevices">storageDevices</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList">ServerStorageDevicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.template">template</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateList">ServerTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.bootOrderInput">bootOrderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.cpuInput">cpuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.firewallInput">firewallInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.hostInput">hostInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.hotResizeInput">hotResizeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.loginInput">loginInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerLogin">ServerLogin</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.memInput">memInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.metadataInput">metadataInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.networkInterfaceInput">networkInterfaceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface">ServerNetworkInterface</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.nicModelInput">nicModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.planInput">planInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.serverGroupInput">serverGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.simpleBackupInput">simpleBackupInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerSimpleBackup">ServerSimpleBackup</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.storageDevicesInput">storageDevicesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerStorageDevices">ServerStorageDevices</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.templateInput">templateInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerTemplate">ServerTemplate</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.timezoneInput">timezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.userDataInput">userDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.videoModelInput">videoModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.bootOrder">bootOrder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.cpu">cpu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.firewall">firewall</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.host">host</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.hotResize">hotResize</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.mem">mem</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.metadata">metadata</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.nicModel">nicModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.plan">plan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.serverGroup">serverGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.timezone">timezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.userData">userData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.videoModel">videoModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.server.Server.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-upcloud.server.Server.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.server.Server.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-upcloud.server.Server.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-upcloud.server.Server.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-upcloud.server.Server.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-upcloud.server.Server.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.server.Server.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.server.Server.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.server.Server.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.server.Server.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.server.Server.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.server.Server.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.server.Server.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.server.Server.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-upcloud.server.Server.property.login"></a>

```java
public ServerLoginList getLogin();
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerLoginList">ServerLoginList</a>

---

##### `networkInterface`<sup>Required</sup> <a name="networkInterface" id="@cdktf/provider-upcloud.server.Server.property.networkInterface"></a>

```java
public ServerNetworkInterfaceList getNetworkInterface();
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList">ServerNetworkInterfaceList</a>

---

##### `simpleBackup`<sup>Required</sup> <a name="simpleBackup" id="@cdktf/provider-upcloud.server.Server.property.simpleBackup"></a>

```java
public ServerSimpleBackupList getSimpleBackup();
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupList">ServerSimpleBackupList</a>

---

##### `storageDevices`<sup>Required</sup> <a name="storageDevices" id="@cdktf/provider-upcloud.server.Server.property.storageDevices"></a>

```java
public ServerStorageDevicesList getStorageDevices();
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList">ServerStorageDevicesList</a>

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-upcloud.server.Server.property.template"></a>

```java
public ServerTemplateList getTemplate();
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerTemplateList">ServerTemplateList</a>

---

##### `bootOrderInput`<sup>Optional</sup> <a name="bootOrderInput" id="@cdktf/provider-upcloud.server.Server.property.bootOrderInput"></a>

```java
public java.lang.String getBootOrderInput();
```

- *Type:* java.lang.String

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktf/provider-upcloud.server.Server.property.cpuInput"></a>

```java
public java.lang.Number getCpuInput();
```

- *Type:* java.lang.Number

---

##### `firewallInput`<sup>Optional</sup> <a name="firewallInput" id="@cdktf/provider-upcloud.server.Server.property.firewallInput"></a>

```java
public java.lang.Object getFirewallInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-upcloud.server.Server.property.hostInput"></a>

```java
public java.lang.Number getHostInput();
```

- *Type:* java.lang.Number

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-upcloud.server.Server.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `hotResizeInput`<sup>Optional</sup> <a name="hotResizeInput" id="@cdktf/provider-upcloud.server.Server.property.hotResizeInput"></a>

```java
public java.lang.Object getHotResizeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-upcloud.server.Server.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `loginInput`<sup>Optional</sup> <a name="loginInput" id="@cdktf/provider-upcloud.server.Server.property.loginInput"></a>

```java
public java.lang.Object getLoginInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerLogin">ServerLogin</a>>

---

##### `memInput`<sup>Optional</sup> <a name="memInput" id="@cdktf/provider-upcloud.server.Server.property.memInput"></a>

```java
public java.lang.Number getMemInput();
```

- *Type:* java.lang.Number

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-upcloud.server.Server.property.metadataInput"></a>

```java
public java.lang.Object getMetadataInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `networkInterfaceInput`<sup>Optional</sup> <a name="networkInterfaceInput" id="@cdktf/provider-upcloud.server.Server.property.networkInterfaceInput"></a>

```java
public java.lang.Object getNetworkInterfaceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface">ServerNetworkInterface</a>>

---

##### `nicModelInput`<sup>Optional</sup> <a name="nicModelInput" id="@cdktf/provider-upcloud.server.Server.property.nicModelInput"></a>

```java
public java.lang.String getNicModelInput();
```

- *Type:* java.lang.String

---

##### `planInput`<sup>Optional</sup> <a name="planInput" id="@cdktf/provider-upcloud.server.Server.property.planInput"></a>

```java
public java.lang.String getPlanInput();
```

- *Type:* java.lang.String

---

##### `serverGroupInput`<sup>Optional</sup> <a name="serverGroupInput" id="@cdktf/provider-upcloud.server.Server.property.serverGroupInput"></a>

```java
public java.lang.String getServerGroupInput();
```

- *Type:* java.lang.String

---

##### `simpleBackupInput`<sup>Optional</sup> <a name="simpleBackupInput" id="@cdktf/provider-upcloud.server.Server.property.simpleBackupInput"></a>

```java
public java.lang.Object getSimpleBackupInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerSimpleBackup">ServerSimpleBackup</a>>

---

##### `storageDevicesInput`<sup>Optional</sup> <a name="storageDevicesInput" id="@cdktf/provider-upcloud.server.Server.property.storageDevicesInput"></a>

```java
public java.lang.Object getStorageDevicesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerStorageDevices">ServerStorageDevices</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-upcloud.server.Server.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `templateInput`<sup>Optional</sup> <a name="templateInput" id="@cdktf/provider-upcloud.server.Server.property.templateInput"></a>

```java
public java.lang.Object getTemplateInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerTemplate">ServerTemplate</a>>

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktf/provider-upcloud.server.Server.property.timezoneInput"></a>

```java
public java.lang.String getTimezoneInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-upcloud.server.Server.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `userDataInput`<sup>Optional</sup> <a name="userDataInput" id="@cdktf/provider-upcloud.server.Server.property.userDataInput"></a>

```java
public java.lang.String getUserDataInput();
```

- *Type:* java.lang.String

---

##### `videoModelInput`<sup>Optional</sup> <a name="videoModelInput" id="@cdktf/provider-upcloud.server.Server.property.videoModelInput"></a>

```java
public java.lang.String getVideoModelInput();
```

- *Type:* java.lang.String

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-upcloud.server.Server.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `bootOrder`<sup>Required</sup> <a name="bootOrder" id="@cdktf/provider-upcloud.server.Server.property.bootOrder"></a>

```java
public java.lang.String getBootOrder();
```

- *Type:* java.lang.String

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-upcloud.server.Server.property.cpu"></a>

```java
public java.lang.Number getCpu();
```

- *Type:* java.lang.Number

---

##### `firewall`<sup>Required</sup> <a name="firewall" id="@cdktf/provider-upcloud.server.Server.property.firewall"></a>

```java
public java.lang.Object getFirewall();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-upcloud.server.Server.property.host"></a>

```java
public java.lang.Number getHost();
```

- *Type:* java.lang.Number

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-upcloud.server.Server.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `hotResize`<sup>Required</sup> <a name="hotResize" id="@cdktf/provider-upcloud.server.Server.property.hotResize"></a>

```java
public java.lang.Object getHotResize();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-upcloud.server.Server.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `mem`<sup>Required</sup> <a name="mem" id="@cdktf/provider-upcloud.server.Server.property.mem"></a>

```java
public java.lang.Number getMem();
```

- *Type:* java.lang.Number

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-upcloud.server.Server.property.metadata"></a>

```java
public java.lang.Object getMetadata();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nicModel`<sup>Required</sup> <a name="nicModel" id="@cdktf/provider-upcloud.server.Server.property.nicModel"></a>

```java
public java.lang.String getNicModel();
```

- *Type:* java.lang.String

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-upcloud.server.Server.property.plan"></a>

```java
public java.lang.String getPlan();
```

- *Type:* java.lang.String

---

##### `serverGroup`<sup>Required</sup> <a name="serverGroup" id="@cdktf/provider-upcloud.server.Server.property.serverGroup"></a>

```java
public java.lang.String getServerGroup();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-upcloud.server.Server.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-upcloud.server.Server.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-upcloud.server.Server.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktf/provider-upcloud.server.Server.property.userData"></a>

```java
public java.lang.String getUserData();
```

- *Type:* java.lang.String

---

##### `videoModel`<sup>Required</sup> <a name="videoModel" id="@cdktf/provider-upcloud.server.Server.property.videoModel"></a>

```java
public java.lang.String getVideoModel();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.server.Server.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.server.Server.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ServerConfig <a name="ServerConfig" id="@cdktf/provider-upcloud.server.ServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.server.ServerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.server.ServerConfig;

ServerConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .hostname(java.lang.String)
    .zone(java.lang.String)
//  .bootOrder(java.lang.String)
//  .cpu(java.lang.Number)
//  .firewall(java.lang.Boolean)
//  .firewall(IResolvable)
//  .host(java.lang.Number)
//  .hotResize(java.lang.Boolean)
//  .hotResize(IResolvable)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .login(IResolvable)
//  .login(java.util.List<ServerLogin>)
//  .mem(java.lang.Number)
//  .metadata(java.lang.Boolean)
//  .metadata(IResolvable)
//  .networkInterface(IResolvable)
//  .networkInterface(java.util.List<ServerNetworkInterface>)
//  .nicModel(java.lang.String)
//  .plan(java.lang.String)
//  .serverGroup(java.lang.String)
//  .simpleBackup(IResolvable)
//  .simpleBackup(java.util.List<ServerSimpleBackup>)
//  .storageDevices(IResolvable)
//  .storageDevices(java.util.List<ServerStorageDevices>)
//  .tags(java.util.List<java.lang.String>)
//  .template(IResolvable)
//  .template(java.util.List<ServerTemplate>)
//  .timezone(java.lang.String)
//  .title(java.lang.String)
//  .userData(java.lang.String)
//  .videoModel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.hostname">hostname</a></code> | <code>java.lang.String</code> | The hostname of the server. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | The zone in which the server will be hosted, e.g. `de-fra1`. You can list available zones with `upctl zone list`. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.bootOrder">bootOrder</a></code> | <code>java.lang.String</code> | The boot device order, `cdrom`\|`disk`\|`network` or comma separated combination of those values. Defaults to `disk`. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.cpu">cpu</a></code> | <code>java.lang.Number</code> | The number of CPU cores for the server. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.firewall">firewall</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Are firewall rules active for the server. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.host">host</a></code> | <code>java.lang.Number</code> | Use this to start the VM on a specific host. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.hotResize">hotResize</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, allows changing the server plan without requiring a reboot. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User defined key-value pairs to classify the server. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.login">login</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerLogin">ServerLogin</a>></code> | login block. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.mem">mem</a></code> | <code>java.lang.Number</code> | The amount of memory for the server (in megabytes). |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.metadata">metadata</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Is metadata service active for the server. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.networkInterface">networkInterface</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface">ServerNetworkInterface</a>></code> | network_interface block. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.nicModel">nicModel</a></code> | <code>java.lang.String</code> | The model of the server's network interfaces. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.plan">plan</a></code> | <code>java.lang.String</code> | The pricing plan used for the server. You can list available server plans with `upctl server plans`. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.serverGroup">serverGroup</a></code> | <code>java.lang.String</code> | The UUID of a server group to attach this server to. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.simpleBackup">simpleBackup</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerSimpleBackup">ServerSimpleBackup</a>></code> | simple_backup block. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.storageDevices">storageDevices</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerStorageDevices">ServerStorageDevices</a>></code> | storage_devices block. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | The server related tags. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.template">template</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerTemplate">ServerTemplate</a>></code> | template block. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.timezone">timezone</a></code> | <code>java.lang.String</code> | The timezone of the server. The timezone must be a valid timezone string, e.g. `Europe/Helsinki`. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.title">title</a></code> | <code>java.lang.String</code> | A short, informational description of the server. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.userData">userData</a></code> | <code>java.lang.String</code> | Defines URL for a server setup script, or the script body itself. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.videoModel">videoModel</a></code> | <code>java.lang.String</code> | The model of the server's video interface. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.server.ServerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.server.ServerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.server.ServerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.server.ServerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.server.ServerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.server.ServerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.server.ServerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-upcloud.server.ServerConfig.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

The hostname of the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#hostname Server#hostname}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.server.ServerConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

The zone in which the server will be hosted, e.g. `de-fra1`. You can list available zones with `upctl zone list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#zone Server#zone}

---

##### `bootOrder`<sup>Optional</sup> <a name="bootOrder" id="@cdktf/provider-upcloud.server.ServerConfig.property.bootOrder"></a>

```java
public java.lang.String getBootOrder();
```

- *Type:* java.lang.String

The boot device order, `cdrom`|`disk`|`network` or comma separated combination of those values. Defaults to `disk`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#boot_order Server#boot_order}

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-upcloud.server.ServerConfig.property.cpu"></a>

```java
public java.lang.Number getCpu();
```

- *Type:* java.lang.Number

The number of CPU cores for the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#cpu Server#cpu}

---

##### `firewall`<sup>Optional</sup> <a name="firewall" id="@cdktf/provider-upcloud.server.ServerConfig.property.firewall"></a>

```java
public java.lang.Object getFirewall();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Are firewall rules active for the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#firewall Server#firewall}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-upcloud.server.ServerConfig.property.host"></a>

```java
public java.lang.Number getHost();
```

- *Type:* java.lang.Number

Use this to start the VM on a specific host.

Refers to value from host -attribute. Only available for private cloud hosts

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#host Server#host}

---

##### `hotResize`<sup>Optional</sup> <a name="hotResize" id="@cdktf/provider-upcloud.server.ServerConfig.property.hotResize"></a>

```java
public java.lang.Object getHotResize();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, allows changing the server plan without requiring a reboot.

This enables hot resizing of the server. If hot resizing fails, the apply operation will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#hot_resize Server#hot_resize}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-upcloud.server.ServerConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User defined key-value pairs to classify the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#labels Server#labels}

---

##### `login`<sup>Optional</sup> <a name="login" id="@cdktf/provider-upcloud.server.ServerConfig.property.login"></a>

```java
public java.lang.Object getLogin();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerLogin">ServerLogin</a>>

login block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#login Server#login}

---

##### `mem`<sup>Optional</sup> <a name="mem" id="@cdktf/provider-upcloud.server.ServerConfig.property.mem"></a>

```java
public java.lang.Number getMem();
```

- *Type:* java.lang.Number

The amount of memory for the server (in megabytes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#mem Server#mem}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-upcloud.server.ServerConfig.property.metadata"></a>

```java
public java.lang.Object getMetadata();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Is metadata service active for the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#metadata Server#metadata}

---

##### `networkInterface`<sup>Optional</sup> <a name="networkInterface" id="@cdktf/provider-upcloud.server.ServerConfig.property.networkInterface"></a>

```java
public java.lang.Object getNetworkInterface();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface">ServerNetworkInterface</a>>

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#network_interface Server#network_interface}

---

##### `nicModel`<sup>Optional</sup> <a name="nicModel" id="@cdktf/provider-upcloud.server.ServerConfig.property.nicModel"></a>

```java
public java.lang.String getNicModel();
```

- *Type:* java.lang.String

The model of the server's network interfaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#nic_model Server#nic_model}

---

##### `plan`<sup>Optional</sup> <a name="plan" id="@cdktf/provider-upcloud.server.ServerConfig.property.plan"></a>

```java
public java.lang.String getPlan();
```

- *Type:* java.lang.String

The pricing plan used for the server. You can list available server plans with `upctl server plans`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#plan Server#plan}

---

##### `serverGroup`<sup>Optional</sup> <a name="serverGroup" id="@cdktf/provider-upcloud.server.ServerConfig.property.serverGroup"></a>

```java
public java.lang.String getServerGroup();
```

- *Type:* java.lang.String

The UUID of a server group to attach this server to.

Note that the server can also be attached to a server group via the `members` property of `upcloud_server_group`. Only one of the these should be defined at a time. This value is only updated if it has been set to non-zero value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#server_group Server#server_group}

---

##### `simpleBackup`<sup>Optional</sup> <a name="simpleBackup" id="@cdktf/provider-upcloud.server.ServerConfig.property.simpleBackup"></a>

```java
public java.lang.Object getSimpleBackup();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerSimpleBackup">ServerSimpleBackup</a>>

simple_backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#simple_backup Server#simple_backup}

---

##### `storageDevices`<sup>Optional</sup> <a name="storageDevices" id="@cdktf/provider-upcloud.server.ServerConfig.property.storageDevices"></a>

```java
public java.lang.Object getStorageDevices();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerStorageDevices">ServerStorageDevices</a>>

storage_devices block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#storage_devices Server#storage_devices}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-upcloud.server.ServerConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

The server related tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#tags Server#tags}

---

##### `template`<sup>Optional</sup> <a name="template" id="@cdktf/provider-upcloud.server.ServerConfig.property.template"></a>

```java
public java.lang.Object getTemplate();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerTemplate">ServerTemplate</a>>

template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#template Server#template}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-upcloud.server.ServerConfig.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

The timezone of the server. The timezone must be a valid timezone string, e.g. `Europe/Helsinki`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#timezone Server#timezone}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-upcloud.server.ServerConfig.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

A short, informational description of the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#title Server#title}

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktf/provider-upcloud.server.ServerConfig.property.userData"></a>

```java
public java.lang.String getUserData();
```

- *Type:* java.lang.String

Defines URL for a server setup script, or the script body itself.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#user_data Server#user_data}

---

##### `videoModel`<sup>Optional</sup> <a name="videoModel" id="@cdktf/provider-upcloud.server.ServerConfig.property.videoModel"></a>

```java
public java.lang.String getVideoModel();
```

- *Type:* java.lang.String

The model of the server's video interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#video_model Server#video_model}

---

### ServerLogin <a name="ServerLogin" id="@cdktf/provider-upcloud.server.ServerLogin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.server.ServerLogin.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.server.ServerLogin;

ServerLogin.builder()
//  .createPassword(java.lang.Boolean)
//  .createPassword(IResolvable)
//  .keys(java.util.List<java.lang.String>)
//  .passwordDelivery(java.lang.String)
//  .user(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLogin.property.createPassword">createPassword</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates a password should be create to allow access. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLogin.property.keys">keys</a></code> | <code>java.util.List<java.lang.String></code> | A list of ssh keys to access the server. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLogin.property.passwordDelivery">passwordDelivery</a></code> | <code>java.lang.String</code> | The delivery method for the server's root password (one of `none`, `email` or `sms`). |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLogin.property.user">user</a></code> | <code>java.lang.String</code> | Username to be create to access the server. |

---

##### `createPassword`<sup>Optional</sup> <a name="createPassword" id="@cdktf/provider-upcloud.server.ServerLogin.property.createPassword"></a>

```java
public java.lang.Object getCreatePassword();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates a password should be create to allow access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#create_password Server#create_password}

---

##### `keys`<sup>Optional</sup> <a name="keys" id="@cdktf/provider-upcloud.server.ServerLogin.property.keys"></a>

```java
public java.util.List<java.lang.String> getKeys();
```

- *Type:* java.util.List<java.lang.String>

A list of ssh keys to access the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#keys Server#keys}

---

##### `passwordDelivery`<sup>Optional</sup> <a name="passwordDelivery" id="@cdktf/provider-upcloud.server.ServerLogin.property.passwordDelivery"></a>

```java
public java.lang.String getPasswordDelivery();
```

- *Type:* java.lang.String

The delivery method for the server's root password (one of `none`, `email` or `sms`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#password_delivery Server#password_delivery}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-upcloud.server.ServerLogin.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

Username to be create to access the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#user Server#user}

---

### ServerNetworkInterface <a name="ServerNetworkInterface" id="@cdktf/provider-upcloud.server.ServerNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.server.ServerNetworkInterface.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.server.ServerNetworkInterface;

ServerNetworkInterface.builder()
    .type(java.lang.String)
//  .additionalIpAddress(IResolvable)
//  .additionalIpAddress(java.util.List<ServerNetworkInterfaceAdditionalIpAddress>)
//  .bootable(java.lang.Boolean)
//  .bootable(IResolvable)
//  .index(java.lang.Number)
//  .ipAddress(java.lang.String)
//  .ipAddressFamily(java.lang.String)
//  .network(java.lang.String)
//  .sourceIpFiltering(java.lang.Boolean)
//  .sourceIpFiltering(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface.property.type">type</a></code> | <code>java.lang.String</code> | Network interface type. For private network interfaces, a network must be specified with an existing network id. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface.property.additionalIpAddress">additionalIpAddress</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddress">ServerNetworkInterfaceAdditionalIpAddress</a>></code> | additional_ip_address block. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface.property.bootable">bootable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | `true` if this interface should be used for network booting. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface.property.index">index</a></code> | <code>java.lang.Number</code> | The interface index. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | The primary IP address of this interface. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface.property.ipAddressFamily">ipAddressFamily</a></code> | <code>java.lang.String</code> | The type of the primary IP address of this interface (one of `IPv4` or `IPv6`). |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface.property.network">network</a></code> | <code>java.lang.String</code> | The UUID of the network to attach this interface to. Required for private network interfaces. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface.property.sourceIpFiltering">sourceIpFiltering</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | `true` if source IP should be filtered. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.server.ServerNetworkInterface.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Network interface type. For private network interfaces, a network must be specified with an existing network id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#type Server#type}

---

##### `additionalIpAddress`<sup>Optional</sup> <a name="additionalIpAddress" id="@cdktf/provider-upcloud.server.ServerNetworkInterface.property.additionalIpAddress"></a>

```java
public java.lang.Object getAdditionalIpAddress();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddress">ServerNetworkInterfaceAdditionalIpAddress</a>>

additional_ip_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#additional_ip_address Server#additional_ip_address}

---

##### `bootable`<sup>Optional</sup> <a name="bootable" id="@cdktf/provider-upcloud.server.ServerNetworkInterface.property.bootable"></a>

```java
public java.lang.Object getBootable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

`true` if this interface should be used for network booting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#bootable Server#bootable}

---

##### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.server.ServerNetworkInterface.property.index"></a>

```java
public java.lang.Number getIndex();
```

- *Type:* java.lang.Number

The interface index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#index Server#index}

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-upcloud.server.ServerNetworkInterface.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

The primary IP address of this interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#ip_address Server#ip_address}

---

##### `ipAddressFamily`<sup>Optional</sup> <a name="ipAddressFamily" id="@cdktf/provider-upcloud.server.ServerNetworkInterface.property.ipAddressFamily"></a>

```java
public java.lang.String getIpAddressFamily();
```

- *Type:* java.lang.String

The type of the primary IP address of this interface (one of `IPv4` or `IPv6`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#ip_address_family Server#ip_address_family}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-upcloud.server.ServerNetworkInterface.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The UUID of the network to attach this interface to. Required for private network interfaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#network Server#network}

---

##### `sourceIpFiltering`<sup>Optional</sup> <a name="sourceIpFiltering" id="@cdktf/provider-upcloud.server.ServerNetworkInterface.property.sourceIpFiltering"></a>

```java
public java.lang.Object getSourceIpFiltering();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

`true` if source IP should be filtered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#source_ip_filtering Server#source_ip_filtering}

---

### ServerNetworkInterfaceAdditionalIpAddress <a name="ServerNetworkInterfaceAdditionalIpAddress" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddress.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.server.ServerNetworkInterfaceAdditionalIpAddress;

ServerNetworkInterfaceAdditionalIpAddress.builder()
//  .ipAddress(java.lang.String)
//  .ipAddressFamily(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddress.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | An additional IP address for this interface. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddress.property.ipAddressFamily">ipAddressFamily</a></code> | <code>java.lang.String</code> | The type of the additional IP address of this interface (one of `IPv4` or `IPv6`). |

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddress.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

An additional IP address for this interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#ip_address Server#ip_address}

---

##### `ipAddressFamily`<sup>Optional</sup> <a name="ipAddressFamily" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddress.property.ipAddressFamily"></a>

```java
public java.lang.String getIpAddressFamily();
```

- *Type:* java.lang.String

The type of the additional IP address of this interface (one of `IPv4` or `IPv6`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#ip_address_family Server#ip_address_family}

---

### ServerSimpleBackup <a name="ServerSimpleBackup" id="@cdktf/provider-upcloud.server.ServerSimpleBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.server.ServerSimpleBackup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.server.ServerSimpleBackup;

ServerSimpleBackup.builder()
//  .plan(java.lang.String)
//  .time(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackup.property.plan">plan</a></code> | <code>java.lang.String</code> | Simple backup plan. Accepted values: daily, dailies, weeklies, monthlies. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackup.property.time">time</a></code> | <code>java.lang.String</code> | Time of the day at which backup will be taken. Should be provided in a hhmm format (e.g. 2230). |

---

##### `plan`<sup>Optional</sup> <a name="plan" id="@cdktf/provider-upcloud.server.ServerSimpleBackup.property.plan"></a>

```java
public java.lang.String getPlan();
```

- *Type:* java.lang.String

Simple backup plan. Accepted values: daily, dailies, weeklies, monthlies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#plan Server#plan}

---

##### `time`<sup>Optional</sup> <a name="time" id="@cdktf/provider-upcloud.server.ServerSimpleBackup.property.time"></a>

```java
public java.lang.String getTime();
```

- *Type:* java.lang.String

Time of the day at which backup will be taken. Should be provided in a hhmm format (e.g. 2230).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#time Server#time}

---

### ServerStorageDevices <a name="ServerStorageDevices" id="@cdktf/provider-upcloud.server.ServerStorageDevices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.server.ServerStorageDevices.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.server.ServerStorageDevices;

ServerStorageDevices.builder()
//  .address(java.lang.String)
//  .addressPosition(java.lang.String)
//  .storage(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevices.property.address">address</a></code> | <code>java.lang.String</code> | The device address the storage will be attached to (`scsi`\|`virtio`\|`ide`). |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevices.property.addressPosition">addressPosition</a></code> | <code>java.lang.String</code> | The device position in the given bus (defined via field `address`). |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevices.property.storage">storage</a></code> | <code>java.lang.String</code> | The UUID of the storage to attach to the server. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevices.property.type">type</a></code> | <code>java.lang.String</code> | The device type the storage will be attached as. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-upcloud.server.ServerStorageDevices.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

The device address the storage will be attached to (`scsi`|`virtio`|`ide`).

Leave `address_position` field empty to auto-select next available address from that bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#address Server#address}

---

##### `addressPosition`<sup>Optional</sup> <a name="addressPosition" id="@cdktf/provider-upcloud.server.ServerStorageDevices.property.addressPosition"></a>

```java
public java.lang.String getAddressPosition();
```

- *Type:* java.lang.String

The device position in the given bus (defined via field `address`).

Valid values for address `virtio` are `0-15` (`0`, for example). Valid values for `scsi` or `ide` are `0-1:0-1` (`0:0`, for example). Leave empty to auto-select next available address in the given bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#address_position Server#address_position}

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-upcloud.server.ServerStorageDevices.property.storage"></a>

```java
public java.lang.String getStorage();
```

- *Type:* java.lang.String

The UUID of the storage to attach to the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#storage Server#storage}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-upcloud.server.ServerStorageDevices.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The device type the storage will be attached as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#type Server#type}

---

### ServerTemplate <a name="ServerTemplate" id="@cdktf/provider-upcloud.server.ServerTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.server.ServerTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.server.ServerTemplate;

ServerTemplate.builder()
//  .address(java.lang.String)
//  .addressPosition(java.lang.String)
//  .backupRule(IResolvable)
//  .backupRule(java.util.List<ServerTemplateBackupRule>)
//  .deleteAutoresizeBackup(java.lang.Boolean)
//  .deleteAutoresizeBackup(IResolvable)
//  .encrypt(java.lang.Boolean)
//  .encrypt(IResolvable)
//  .filesystemAutoresize(java.lang.Boolean)
//  .filesystemAutoresize(IResolvable)
//  .size(java.lang.Number)
//  .storage(java.lang.String)
//  .tier(java.lang.String)
//  .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplate.property.address">address</a></code> | <code>java.lang.String</code> | The device address the storage will be attached to (`scsi`\|`virtio`\|`ide`). |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplate.property.addressPosition">addressPosition</a></code> | <code>java.lang.String</code> | The device position in the given bus (defined via field `address`). |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplate.property.backupRule">backupRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRule">ServerTemplateBackupRule</a>></code> | backup_rule block. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplate.property.deleteAutoresizeBackup">deleteAutoresizeBackup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, the backup taken before the partition and filesystem resize attempt will be deleted immediately after success. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplate.property.encrypt">encrypt</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Sets if the storage is encrypted at rest. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplate.property.filesystemAutoresize">filesystemAutoresize</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, provider will attempt to resize partition and filesystem when the size of template storage changes. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplate.property.size">size</a></code> | <code>java.lang.Number</code> | The size of the storage in gigabytes. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplate.property.storage">storage</a></code> | <code>java.lang.String</code> | A valid storage UUID or template name. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplate.property.tier">tier</a></code> | <code>java.lang.String</code> | The storage tier to use. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplate.property.title">title</a></code> | <code>java.lang.String</code> | A short, informative description. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-upcloud.server.ServerTemplate.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

The device address the storage will be attached to (`scsi`|`virtio`|`ide`).

Leave `address_position` field empty to auto-select next available address from that bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#address Server#address}

---

##### `addressPosition`<sup>Optional</sup> <a name="addressPosition" id="@cdktf/provider-upcloud.server.ServerTemplate.property.addressPosition"></a>

```java
public java.lang.String getAddressPosition();
```

- *Type:* java.lang.String

The device position in the given bus (defined via field `address`).

For example `0:0`, or `0`. Leave empty to auto-select next available address in the given bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#address_position Server#address_position}

---

##### `backupRule`<sup>Optional</sup> <a name="backupRule" id="@cdktf/provider-upcloud.server.ServerTemplate.property.backupRule"></a>

```java
public java.lang.Object getBackupRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRule">ServerTemplateBackupRule</a>>

backup_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#backup_rule Server#backup_rule}

---

##### `deleteAutoresizeBackup`<sup>Optional</sup> <a name="deleteAutoresizeBackup" id="@cdktf/provider-upcloud.server.ServerTemplate.property.deleteAutoresizeBackup"></a>

```java
public java.lang.Object getDeleteAutoresizeBackup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, the backup taken before the partition and filesystem resize attempt will be deleted immediately after success.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#delete_autoresize_backup Server#delete_autoresize_backup}

---

##### `encrypt`<sup>Optional</sup> <a name="encrypt" id="@cdktf/provider-upcloud.server.ServerTemplate.property.encrypt"></a>

```java
public java.lang.Object getEncrypt();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Sets if the storage is encrypted at rest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#encrypt Server#encrypt}

---

##### `filesystemAutoresize`<sup>Optional</sup> <a name="filesystemAutoresize" id="@cdktf/provider-upcloud.server.ServerTemplate.property.filesystemAutoresize"></a>

```java
public java.lang.Object getFilesystemAutoresize();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, provider will attempt to resize partition and filesystem when the size of template storage changes.

Please note that before the resize attempt is made, backup of the storage will be taken. If the resize attempt fails, the backup will be used
to restore the storage and then deleted. If the resize attempt succeeds, backup will be kept (unless delete_autoresize_backup option is set to true).
Taking and keeping backups incure costs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#filesystem_autoresize Server#filesystem_autoresize}

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-upcloud.server.ServerTemplate.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

The size of the storage in gigabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#size Server#size}

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-upcloud.server.ServerTemplate.property.storage"></a>

```java
public java.lang.String getStorage();
```

- *Type:* java.lang.String

A valid storage UUID or template name.

You can list available public templates with `upctl storage list --public --template` and available private templates with `upctl storage list --template`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#storage Server#storage}

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktf/provider-upcloud.server.ServerTemplate.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

The storage tier to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#tier Server#tier}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-upcloud.server.ServerTemplate.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

A short, informative description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#title Server#title}

---

### ServerTemplateBackupRule <a name="ServerTemplateBackupRule" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.server.ServerTemplateBackupRule;

ServerTemplateBackupRule.builder()
    .interval(java.lang.String)
    .retention(java.lang.Number)
    .time(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRule.property.interval">interval</a></code> | <code>java.lang.String</code> | The weekday when the backup is created. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRule.property.retention">retention</a></code> | <code>java.lang.Number</code> | The number of days before a backup is automatically deleted. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRule.property.time">time</a></code> | <code>java.lang.String</code> | The time of day (UTC) when the backup is created. |

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRule.property.interval"></a>

```java
public java.lang.String getInterval();
```

- *Type:* java.lang.String

The weekday when the backup is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#interval Server#interval}

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRule.property.retention"></a>

```java
public java.lang.Number getRetention();
```

- *Type:* java.lang.Number

The number of days before a backup is automatically deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#retention Server#retention}

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRule.property.time"></a>

```java
public java.lang.String getTime();
```

- *Type:* java.lang.String

The time of day (UTC) when the backup is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/server#time Server#time}

---

## Classes <a name="Classes" id="Classes"></a>

### ServerLoginList <a name="ServerLoginList" id="@cdktf/provider-upcloud.server.ServerLoginList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.server.ServerLoginList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.server.ServerLoginList;

new ServerLoginList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.server.ServerLoginList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerLoginList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.server.ServerLoginList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.server.ServerLoginList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.server.ServerLoginList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.server.ServerLoginList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.server.ServerLoginList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.server.ServerLoginList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.server.ServerLoginList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.server.ServerLoginList.get"></a>

```java
public ServerLoginOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.server.ServerLoginList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerLogin">ServerLogin</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.server.ServerLoginList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.server.ServerLoginList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.server.ServerLoginList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerLogin">ServerLogin</a>>

---


### ServerLoginOutputReference <a name="ServerLoginOutputReference" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.server.ServerLoginOutputReference;

new ServerLoginOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.resetCreatePassword">resetCreatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.resetKeys">resetKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.resetPasswordDelivery">resetPasswordDelivery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.resetUser">resetUser</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreatePassword` <a name="resetCreatePassword" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.resetCreatePassword"></a>

```java
public void resetCreatePassword()
```

##### `resetKeys` <a name="resetKeys" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.resetKeys"></a>

```java
public void resetKeys()
```

##### `resetPasswordDelivery` <a name="resetPasswordDelivery" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.resetPasswordDelivery"></a>

```java
public void resetPasswordDelivery()
```

##### `resetUser` <a name="resetUser" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.resetUser"></a>

```java
public void resetUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.createPasswordInput">createPasswordInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.keysInput">keysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.passwordDeliveryInput">passwordDeliveryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.userInput">userInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.createPassword">createPassword</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.keys">keys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.passwordDelivery">passwordDelivery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.user">user</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-upcloud.server.ServerLogin">ServerLogin</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createPasswordInput`<sup>Optional</sup> <a name="createPasswordInput" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.createPasswordInput"></a>

```java
public java.lang.Object getCreatePasswordInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keysInput`<sup>Optional</sup> <a name="keysInput" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.keysInput"></a>

```java
public java.util.List<java.lang.String> getKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `passwordDeliveryInput`<sup>Optional</sup> <a name="passwordDeliveryInput" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.passwordDeliveryInput"></a>

```java
public java.lang.String getPasswordDeliveryInput();
```

- *Type:* java.lang.String

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.userInput"></a>

```java
public java.lang.String getUserInput();
```

- *Type:* java.lang.String

---

##### `createPassword`<sup>Required</sup> <a name="createPassword" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.createPassword"></a>

```java
public java.lang.Object getCreatePassword();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.keys"></a>

```java
public java.util.List<java.lang.String> getKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `passwordDelivery`<sup>Required</sup> <a name="passwordDelivery" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.passwordDelivery"></a>

```java
public java.lang.String getPasswordDelivery();
```

- *Type:* java.lang.String

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-upcloud.server.ServerLogin">ServerLogin</a>

---


### ServerNetworkInterfaceAdditionalIpAddressList <a name="ServerNetworkInterfaceAdditionalIpAddressList" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList;

new ServerNetworkInterfaceAdditionalIpAddressList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.get"></a>

```java
public ServerNetworkInterfaceAdditionalIpAddressOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddress">ServerNetworkInterfaceAdditionalIpAddress</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddress">ServerNetworkInterfaceAdditionalIpAddress</a>>

---


### ServerNetworkInterfaceAdditionalIpAddressOutputReference <a name="ServerNetworkInterfaceAdditionalIpAddressOutputReference" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference;

new ServerNetworkInterfaceAdditionalIpAddressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.resetIpAddressFamily">resetIpAddressFamily</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.resetIpAddress"></a>

```java
public void resetIpAddress()
```

##### `resetIpAddressFamily` <a name="resetIpAddressFamily" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.resetIpAddressFamily"></a>

```java
public void resetIpAddressFamily()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.ipAddressFloating">ipAddressFloating</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.ipAddressFamilyInput">ipAddressFamilyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.ipAddressFamily">ipAddressFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddress">ServerNetworkInterfaceAdditionalIpAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipAddressFloating`<sup>Required</sup> <a name="ipAddressFloating" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.ipAddressFloating"></a>

```java
public IResolvable getIpAddressFloating();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `ipAddressFamilyInput`<sup>Optional</sup> <a name="ipAddressFamilyInput" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.ipAddressFamilyInput"></a>

```java
public java.lang.String getIpAddressFamilyInput();
```

- *Type:* java.lang.String

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.ipAddressInput"></a>

```java
public java.lang.String getIpAddressInput();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `ipAddressFamily`<sup>Required</sup> <a name="ipAddressFamily" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.ipAddressFamily"></a>

```java
public java.lang.String getIpAddressFamily();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddress">ServerNetworkInterfaceAdditionalIpAddress</a>

---


### ServerNetworkInterfaceList <a name="ServerNetworkInterfaceList" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.server.ServerNetworkInterfaceList;

new ServerNetworkInterfaceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.get"></a>

```java
public ServerNetworkInterfaceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface">ServerNetworkInterface</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface">ServerNetworkInterface</a>>

---


### ServerNetworkInterfaceOutputReference <a name="ServerNetworkInterfaceOutputReference" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.server.ServerNetworkInterfaceOutputReference;

new ServerNetworkInterfaceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.putAdditionalIpAddress">putAdditionalIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetAdditionalIpAddress">resetAdditionalIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetBootable">resetBootable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetIndex">resetIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetIpAddressFamily">resetIpAddressFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetSourceIpFiltering">resetSourceIpFiltering</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdditionalIpAddress` <a name="putAdditionalIpAddress" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.putAdditionalIpAddress"></a>

```java
public void putAdditionalIpAddress(IResolvable OR java.util.List<ServerNetworkInterfaceAdditionalIpAddress> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.putAdditionalIpAddress.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddress">ServerNetworkInterfaceAdditionalIpAddress</a>>

---

##### `resetAdditionalIpAddress` <a name="resetAdditionalIpAddress" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetAdditionalIpAddress"></a>

```java
public void resetAdditionalIpAddress()
```

##### `resetBootable` <a name="resetBootable" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetBootable"></a>

```java
public void resetBootable()
```

##### `resetIndex` <a name="resetIndex" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetIndex"></a>

```java
public void resetIndex()
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetIpAddress"></a>

```java
public void resetIpAddress()
```

##### `resetIpAddressFamily` <a name="resetIpAddressFamily" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetIpAddressFamily"></a>

```java
public void resetIpAddressFamily()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetSourceIpFiltering` <a name="resetSourceIpFiltering" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetSourceIpFiltering"></a>

```java
public void resetSourceIpFiltering()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.additionalIpAddress">additionalIpAddress</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList">ServerNetworkInterfaceAdditionalIpAddressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.ipAddressFloating">ipAddressFloating</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.macAddress">macAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.additionalIpAddressInput">additionalIpAddressInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddress">ServerNetworkInterfaceAdditionalIpAddress</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.bootableInput">bootableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.indexInput">indexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.ipAddressFamilyInput">ipAddressFamilyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.sourceIpFilteringInput">sourceIpFilteringInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.bootable">bootable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.index">index</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.ipAddressFamily">ipAddressFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.sourceIpFiltering">sourceIpFiltering</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface">ServerNetworkInterface</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalIpAddress`<sup>Required</sup> <a name="additionalIpAddress" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.additionalIpAddress"></a>

```java
public ServerNetworkInterfaceAdditionalIpAddressList getAdditionalIpAddress();
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList">ServerNetworkInterfaceAdditionalIpAddressList</a>

---

##### `ipAddressFloating`<sup>Required</sup> <a name="ipAddressFloating" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.ipAddressFloating"></a>

```java
public IResolvable getIpAddressFloating();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `macAddress`<sup>Required</sup> <a name="macAddress" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.macAddress"></a>

```java
public java.lang.String getMacAddress();
```

- *Type:* java.lang.String

---

##### `additionalIpAddressInput`<sup>Optional</sup> <a name="additionalIpAddressInput" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.additionalIpAddressInput"></a>

```java
public java.lang.Object getAdditionalIpAddressInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddress">ServerNetworkInterfaceAdditionalIpAddress</a>>

---

##### `bootableInput`<sup>Optional</sup> <a name="bootableInput" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.bootableInput"></a>

```java
public java.lang.Object getBootableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `indexInput`<sup>Optional</sup> <a name="indexInput" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.indexInput"></a>

```java
public java.lang.Number getIndexInput();
```

- *Type:* java.lang.Number

---

##### `ipAddressFamilyInput`<sup>Optional</sup> <a name="ipAddressFamilyInput" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.ipAddressFamilyInput"></a>

```java
public java.lang.String getIpAddressFamilyInput();
```

- *Type:* java.lang.String

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.ipAddressInput"></a>

```java
public java.lang.String getIpAddressInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `sourceIpFilteringInput`<sup>Optional</sup> <a name="sourceIpFilteringInput" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.sourceIpFilteringInput"></a>

```java
public java.lang.Object getSourceIpFilteringInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `bootable`<sup>Required</sup> <a name="bootable" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.bootable"></a>

```java
public java.lang.Object getBootable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.index"></a>

```java
public java.lang.Number getIndex();
```

- *Type:* java.lang.Number

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `ipAddressFamily`<sup>Required</sup> <a name="ipAddressFamily" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.ipAddressFamily"></a>

```java
public java.lang.String getIpAddressFamily();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `sourceIpFiltering`<sup>Required</sup> <a name="sourceIpFiltering" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.sourceIpFiltering"></a>

```java
public java.lang.Object getSourceIpFiltering();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface">ServerNetworkInterface</a>

---


### ServerSimpleBackupList <a name="ServerSimpleBackupList" id="@cdktf/provider-upcloud.server.ServerSimpleBackupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.server.ServerSimpleBackupList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.server.ServerSimpleBackupList;

new ServerSimpleBackupList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.server.ServerSimpleBackupList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.server.ServerSimpleBackupList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.server.ServerSimpleBackupList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.server.ServerSimpleBackupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.server.ServerSimpleBackupList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.server.ServerSimpleBackupList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.server.ServerSimpleBackupList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.server.ServerSimpleBackupList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.server.ServerSimpleBackupList.get"></a>

```java
public ServerSimpleBackupOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.server.ServerSimpleBackupList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerSimpleBackup">ServerSimpleBackup</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.server.ServerSimpleBackupList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.server.ServerSimpleBackupList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.server.ServerSimpleBackupList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerSimpleBackup">ServerSimpleBackup</a>>

---


### ServerSimpleBackupOutputReference <a name="ServerSimpleBackupOutputReference" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.server.ServerSimpleBackupOutputReference;

new ServerSimpleBackupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.resetPlan">resetPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.resetTime">resetTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPlan` <a name="resetPlan" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.resetPlan"></a>

```java
public void resetPlan()
```

##### `resetTime` <a name="resetTime" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.resetTime"></a>

```java
public void resetTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.planInput">planInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.timeInput">timeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.plan">plan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.time">time</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-upcloud.server.ServerSimpleBackup">ServerSimpleBackup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `planInput`<sup>Optional</sup> <a name="planInput" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.planInput"></a>

```java
public java.lang.String getPlanInput();
```

- *Type:* java.lang.String

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.timeInput"></a>

```java
public java.lang.String getTimeInput();
```

- *Type:* java.lang.String

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.plan"></a>

```java
public java.lang.String getPlan();
```

- *Type:* java.lang.String

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.time"></a>

```java
public java.lang.String getTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-upcloud.server.ServerSimpleBackup">ServerSimpleBackup</a>

---


### ServerStorageDevicesList <a name="ServerStorageDevicesList" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.server.ServerStorageDevicesList;

new ServerStorageDevicesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.get"></a>

```java
public ServerStorageDevicesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerStorageDevices">ServerStorageDevices</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerStorageDevices">ServerStorageDevices</a>>

---


### ServerStorageDevicesOutputReference <a name="ServerStorageDevicesOutputReference" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.server.ServerStorageDevicesOutputReference;

new ServerStorageDevicesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.resetAddressPosition">resetAddressPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.resetStorage">resetStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.resetAddress"></a>

```java
public void resetAddress()
```

##### `resetAddressPosition` <a name="resetAddressPosition" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.resetAddressPosition"></a>

```java
public void resetAddressPosition()
```

##### `resetStorage` <a name="resetStorage" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.resetStorage"></a>

```java
public void resetStorage()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.addressPositionInput">addressPositionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.storageInput">storageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.addressPosition">addressPosition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.storage">storage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-upcloud.server.ServerStorageDevices">ServerStorageDevices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `addressPositionInput`<sup>Optional</sup> <a name="addressPositionInput" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.addressPositionInput"></a>

```java
public java.lang.String getAddressPositionInput();
```

- *Type:* java.lang.String

---

##### `storageInput`<sup>Optional</sup> <a name="storageInput" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.storageInput"></a>

```java
public java.lang.String getStorageInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `addressPosition`<sup>Required</sup> <a name="addressPosition" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.addressPosition"></a>

```java
public java.lang.String getAddressPosition();
```

- *Type:* java.lang.String

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.storage"></a>

```java
public java.lang.String getStorage();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-upcloud.server.ServerStorageDevices">ServerStorageDevices</a>

---


### ServerTemplateBackupRuleList <a name="ServerTemplateBackupRuleList" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.server.ServerTemplateBackupRuleList;

new ServerTemplateBackupRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleList.get"></a>

```java
public ServerTemplateBackupRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRule">ServerTemplateBackupRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRule">ServerTemplateBackupRule</a>>

---


### ServerTemplateBackupRuleOutputReference <a name="ServerTemplateBackupRuleOutputReference" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.server.ServerTemplateBackupRuleOutputReference;

new ServerTemplateBackupRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.intervalInput">intervalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.retentionInput">retentionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.timeInput">timeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.interval">interval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.retention">retention</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.time">time</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRule">ServerTemplateBackupRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.intervalInput"></a>

```java
public java.lang.String getIntervalInput();
```

- *Type:* java.lang.String

---

##### `retentionInput`<sup>Optional</sup> <a name="retentionInput" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.retentionInput"></a>

```java
public java.lang.Number getRetentionInput();
```

- *Type:* java.lang.Number

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.timeInput"></a>

```java
public java.lang.String getTimeInput();
```

- *Type:* java.lang.String

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.interval"></a>

```java
public java.lang.String getInterval();
```

- *Type:* java.lang.String

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.retention"></a>

```java
public java.lang.Number getRetention();
```

- *Type:* java.lang.Number

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.time"></a>

```java
public java.lang.String getTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRule">ServerTemplateBackupRule</a>

---


### ServerTemplateList <a name="ServerTemplateList" id="@cdktf/provider-upcloud.server.ServerTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.server.ServerTemplateList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.server.ServerTemplateList;

new ServerTemplateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.server.ServerTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.server.ServerTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.server.ServerTemplateList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.server.ServerTemplateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.server.ServerTemplateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.server.ServerTemplateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.server.ServerTemplateList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.server.ServerTemplateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.server.ServerTemplateList.get"></a>

```java
public ServerTemplateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.server.ServerTemplateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerTemplate">ServerTemplate</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.server.ServerTemplateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.server.ServerTemplateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.server.ServerTemplateList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerTemplate">ServerTemplate</a>>

---


### ServerTemplateOutputReference <a name="ServerTemplateOutputReference" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.server.ServerTemplateOutputReference;

new ServerTemplateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.putBackupRule">putBackupRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetAddressPosition">resetAddressPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetBackupRule">resetBackupRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetDeleteAutoresizeBackup">resetDeleteAutoresizeBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetEncrypt">resetEncrypt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetFilesystemAutoresize">resetFilesystemAutoresize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetSize">resetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetStorage">resetStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetTier">resetTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBackupRule` <a name="putBackupRule" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.putBackupRule"></a>

```java
public void putBackupRule(IResolvable OR java.util.List<ServerTemplateBackupRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.putBackupRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRule">ServerTemplateBackupRule</a>>

---

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetAddress"></a>

```java
public void resetAddress()
```

##### `resetAddressPosition` <a name="resetAddressPosition" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetAddressPosition"></a>

```java
public void resetAddressPosition()
```

##### `resetBackupRule` <a name="resetBackupRule" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetBackupRule"></a>

```java
public void resetBackupRule()
```

##### `resetDeleteAutoresizeBackup` <a name="resetDeleteAutoresizeBackup" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetDeleteAutoresizeBackup"></a>

```java
public void resetDeleteAutoresizeBackup()
```

##### `resetEncrypt` <a name="resetEncrypt" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetEncrypt"></a>

```java
public void resetEncrypt()
```

##### `resetFilesystemAutoresize` <a name="resetFilesystemAutoresize" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetFilesystemAutoresize"></a>

```java
public void resetFilesystemAutoresize()
```

##### `resetSize` <a name="resetSize" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetSize"></a>

```java
public void resetSize()
```

##### `resetStorage` <a name="resetStorage" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetStorage"></a>

```java
public void resetStorage()
```

##### `resetTier` <a name="resetTier" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetTier"></a>

```java
public void resetTier()
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetTitle"></a>

```java
public void resetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.backupRule">backupRule</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleList">ServerTemplateBackupRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.addressPositionInput">addressPositionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.backupRuleInput">backupRuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRule">ServerTemplateBackupRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.deleteAutoresizeBackupInput">deleteAutoresizeBackupInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.encryptInput">encryptInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.filesystemAutoresizeInput">filesystemAutoresizeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.sizeInput">sizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.storageInput">storageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.tierInput">tierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.addressPosition">addressPosition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.deleteAutoresizeBackup">deleteAutoresizeBackup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.encrypt">encrypt</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.filesystemAutoresize">filesystemAutoresize</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.storage">storage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.tier">tier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-upcloud.server.ServerTemplate">ServerTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupRule`<sup>Required</sup> <a name="backupRule" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.backupRule"></a>

```java
public ServerTemplateBackupRuleList getBackupRule();
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleList">ServerTemplateBackupRuleList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `addressPositionInput`<sup>Optional</sup> <a name="addressPositionInput" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.addressPositionInput"></a>

```java
public java.lang.String getAddressPositionInput();
```

- *Type:* java.lang.String

---

##### `backupRuleInput`<sup>Optional</sup> <a name="backupRuleInput" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.backupRuleInput"></a>

```java
public java.lang.Object getBackupRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRule">ServerTemplateBackupRule</a>>

---

##### `deleteAutoresizeBackupInput`<sup>Optional</sup> <a name="deleteAutoresizeBackupInput" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.deleteAutoresizeBackupInput"></a>

```java
public java.lang.Object getDeleteAutoresizeBackupInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encryptInput`<sup>Optional</sup> <a name="encryptInput" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.encryptInput"></a>

```java
public java.lang.Object getEncryptInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filesystemAutoresizeInput`<sup>Optional</sup> <a name="filesystemAutoresizeInput" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.filesystemAutoresizeInput"></a>

```java
public java.lang.Object getFilesystemAutoresizeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.sizeInput"></a>

```java
public java.lang.Number getSizeInput();
```

- *Type:* java.lang.Number

---

##### `storageInput`<sup>Optional</sup> <a name="storageInput" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.storageInput"></a>

```java
public java.lang.String getStorageInput();
```

- *Type:* java.lang.String

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.tierInput"></a>

```java
public java.lang.String getTierInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `addressPosition`<sup>Required</sup> <a name="addressPosition" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.addressPosition"></a>

```java
public java.lang.String getAddressPosition();
```

- *Type:* java.lang.String

---

##### `deleteAutoresizeBackup`<sup>Required</sup> <a name="deleteAutoresizeBackup" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.deleteAutoresizeBackup"></a>

```java
public java.lang.Object getDeleteAutoresizeBackup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encrypt`<sup>Required</sup> <a name="encrypt" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.encrypt"></a>

```java
public java.lang.Object getEncrypt();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filesystemAutoresize`<sup>Required</sup> <a name="filesystemAutoresize" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.filesystemAutoresize"></a>

```java
public java.lang.Object getFilesystemAutoresize();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.storage"></a>

```java
public java.lang.String getStorage();
```

- *Type:* java.lang.String

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-upcloud.server.ServerTemplate">ServerTemplate</a>

---



