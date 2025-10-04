# `managedDatabaseValkey` Submodule <a name="`managedDatabaseValkey` Submodule" id="@cdktf/provider-upcloud.managedDatabaseValkey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedDatabaseValkey <a name="ManagedDatabaseValkey" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey upcloud_managed_database_valkey}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_valkey.ManagedDatabaseValkey;

ManagedDatabaseValkey.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .plan(java.lang.String)
    .title(java.lang.String)
    .zone(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .maintenanceWindowDow(java.lang.String)
//  .maintenanceWindowTime(java.lang.String)
//  .network(IResolvable)
//  .network(java.util.List<ManagedDatabaseValkeyNetwork>)
//  .powered(java.lang.Boolean)
//  .powered(IResolvable)
//  .properties(ManagedDatabaseValkeyProperties)
//  .terminationProtection(java.lang.Boolean)
//  .terminationProtection(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.plan">plan</a></code> | <code>java.lang.String</code> | Service plan to use. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.title">title</a></code> | <code>java.lang.String</code> | Title of a managed database instance. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.zone">zone</a></code> | <code>java.lang.String</code> | Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#id ManagedDatabaseValkey#id}. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User defined key-value pairs to classify the managed database. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.maintenanceWindowDow">maintenanceWindowDow</a></code> | <code>java.lang.String</code> | Maintenance window day of week. Lower case weekday name (monday, tuesday, ...). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.maintenanceWindowTime">maintenanceWindowTime</a></code> | <code>java.lang.String</code> | Maintenance window UTC time in hh:mm:ss format. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.network">network</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork">ManagedDatabaseValkeyNetwork</a>></code> | network block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.powered">powered</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The administrative power state of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.properties">properties</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties">ManagedDatabaseValkeyProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.terminationProtection">terminationProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, prevents the managed service from being powered off, or deleted. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the service.

The name is used as a prefix for the logical hostname. Must be unique within an account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#name ManagedDatabaseValkey#name}

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.plan"></a>

- *Type:* java.lang.String

Service plan to use.

This determines how much resources the instance will have. You can list available plans with `upctl database plans <type>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#plan ManagedDatabaseValkey#plan}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.title"></a>

- *Type:* java.lang.String

Title of a managed database instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#title ManagedDatabaseValkey#title}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.zone"></a>

- *Type:* java.lang.String

Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#zone ManagedDatabaseValkey#zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#id ManagedDatabaseValkey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User defined key-value pairs to classify the managed database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#labels ManagedDatabaseValkey#labels}

---

##### `maintenanceWindowDow`<sup>Optional</sup> <a name="maintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.maintenanceWindowDow"></a>

- *Type:* java.lang.String

Maintenance window day of week. Lower case weekday name (monday, tuesday, ...).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#maintenance_window_dow ManagedDatabaseValkey#maintenance_window_dow}

---

##### `maintenanceWindowTime`<sup>Optional</sup> <a name="maintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.maintenanceWindowTime"></a>

- *Type:* java.lang.String

Maintenance window UTC time in hh:mm:ss format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#maintenance_window_time ManagedDatabaseValkey#maintenance_window_time}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.network"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork">ManagedDatabaseValkeyNetwork</a>>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#network ManagedDatabaseValkey#network}

---

##### `powered`<sup>Optional</sup> <a name="powered" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.powered"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The administrative power state of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#powered ManagedDatabaseValkey#powered}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.properties"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties">ManagedDatabaseValkeyProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#properties ManagedDatabaseValkey#properties}

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.terminationProtection"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, prevents the managed service from being powered off, or deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#termination_protection ManagedDatabaseValkey#termination_protection}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.putNetwork">putNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetMaintenanceWindowDow">resetMaintenanceWindowDow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetMaintenanceWindowTime">resetMaintenanceWindowTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetPowered">resetPowered</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetTerminationProtection">resetTerminationProtection</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNetwork` <a name="putNetwork" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.putNetwork"></a>

```java
public void putNetwork(IResolvable OR java.util.List<ManagedDatabaseValkeyNetwork> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.putNetwork.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork">ManagedDatabaseValkeyNetwork</a>>

---

##### `putProperties` <a name="putProperties" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.putProperties"></a>

```java
public void putProperties(ManagedDatabaseValkeyProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties">ManagedDatabaseValkeyProperties</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMaintenanceWindowDow` <a name="resetMaintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetMaintenanceWindowDow"></a>

```java
public void resetMaintenanceWindowDow()
```

##### `resetMaintenanceWindowTime` <a name="resetMaintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetMaintenanceWindowTime"></a>

```java
public void resetMaintenanceWindowTime()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetPowered` <a name="resetPowered" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetPowered"></a>

```java
public void resetPowered()
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetProperties"></a>

```java
public void resetProperties()
```

##### `resetTerminationProtection` <a name="resetTerminationProtection" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetTerminationProtection"></a>

```java
public void resetTerminationProtection()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ManagedDatabaseValkey resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_valkey.ManagedDatabaseValkey;

ManagedDatabaseValkey.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_valkey.ManagedDatabaseValkey;

ManagedDatabaseValkey.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_valkey.ManagedDatabaseValkey;

ManagedDatabaseValkey.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_valkey.ManagedDatabaseValkey;

ManagedDatabaseValkey.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ManagedDatabaseValkey.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ManagedDatabaseValkey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ManagedDatabaseValkey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ManagedDatabaseValkey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ManagedDatabaseValkey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.components">components</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList">ManagedDatabaseValkeyComponentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.network">network</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList">ManagedDatabaseValkeyNetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.nodeStates">nodeStates</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList">ManagedDatabaseValkeyNodeStatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.primaryDatabase">primaryDatabase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference">ManagedDatabaseValkeyPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.serviceHost">serviceHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.servicePassword">servicePassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.servicePort">servicePort</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.serviceUri">serviceUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.serviceUsername">serviceUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.maintenanceWindowDowInput">maintenanceWindowDowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.maintenanceWindowTimeInput">maintenanceWindowTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.networkInput">networkInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork">ManagedDatabaseValkeyNetwork</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.planInput">planInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.poweredInput">poweredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.propertiesInput">propertiesInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties">ManagedDatabaseValkeyProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.terminationProtectionInput">terminationProtectionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.maintenanceWindowDow">maintenanceWindowDow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.maintenanceWindowTime">maintenanceWindowTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.plan">plan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.powered">powered</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.terminationProtection">terminationProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `components`<sup>Required</sup> <a name="components" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.components"></a>

```java
public ManagedDatabaseValkeyComponentsList getComponents();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList">ManagedDatabaseValkeyComponentsList</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.network"></a>

```java
public ManagedDatabaseValkeyNetworkList getNetwork();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList">ManagedDatabaseValkeyNetworkList</a>

---

##### `nodeStates`<sup>Required</sup> <a name="nodeStates" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.nodeStates"></a>

```java
public ManagedDatabaseValkeyNodeStatesList getNodeStates();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList">ManagedDatabaseValkeyNodeStatesList</a>

---

##### `primaryDatabase`<sup>Required</sup> <a name="primaryDatabase" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.primaryDatabase"></a>

```java
public java.lang.String getPrimaryDatabase();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.properties"></a>

```java
public ManagedDatabaseValkeyPropertiesOutputReference getProperties();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference">ManagedDatabaseValkeyPropertiesOutputReference</a>

---

##### `serviceHost`<sup>Required</sup> <a name="serviceHost" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.serviceHost"></a>

```java
public java.lang.String getServiceHost();
```

- *Type:* java.lang.String

---

##### `servicePassword`<sup>Required</sup> <a name="servicePassword" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.servicePassword"></a>

```java
public java.lang.String getServicePassword();
```

- *Type:* java.lang.String

---

##### `servicePort`<sup>Required</sup> <a name="servicePort" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.servicePort"></a>

```java
public java.lang.String getServicePort();
```

- *Type:* java.lang.String

---

##### `serviceUri`<sup>Required</sup> <a name="serviceUri" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.serviceUri"></a>

```java
public java.lang.String getServiceUri();
```

- *Type:* java.lang.String

---

##### `serviceUsername`<sup>Required</sup> <a name="serviceUsername" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.serviceUsername"></a>

```java
public java.lang.String getServiceUsername();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `maintenanceWindowDowInput`<sup>Optional</sup> <a name="maintenanceWindowDowInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.maintenanceWindowDowInput"></a>

```java
public java.lang.String getMaintenanceWindowDowInput();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowTimeInput`<sup>Optional</sup> <a name="maintenanceWindowTimeInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.maintenanceWindowTimeInput"></a>

```java
public java.lang.String getMaintenanceWindowTimeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.networkInput"></a>

```java
public java.lang.Object getNetworkInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork">ManagedDatabaseValkeyNetwork</a>>

---

##### `planInput`<sup>Optional</sup> <a name="planInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.planInput"></a>

```java
public java.lang.String getPlanInput();
```

- *Type:* java.lang.String

---

##### `poweredInput`<sup>Optional</sup> <a name="poweredInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.poweredInput"></a>

```java
public java.lang.Object getPoweredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.propertiesInput"></a>

```java
public ManagedDatabaseValkeyProperties getPropertiesInput();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties">ManagedDatabaseValkeyProperties</a>

---

##### `terminationProtectionInput`<sup>Optional</sup> <a name="terminationProtectionInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.terminationProtectionInput"></a>

```java
public java.lang.Object getTerminationProtectionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `maintenanceWindowDow`<sup>Required</sup> <a name="maintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.maintenanceWindowDow"></a>

```java
public java.lang.String getMaintenanceWindowDow();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowTime`<sup>Required</sup> <a name="maintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.maintenanceWindowTime"></a>

```java
public java.lang.String getMaintenanceWindowTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.plan"></a>

```java
public java.lang.String getPlan();
```

- *Type:* java.lang.String

---

##### `powered`<sup>Required</sup> <a name="powered" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.powered"></a>

```java
public java.lang.Object getPowered();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `terminationProtection`<sup>Required</sup> <a name="terminationProtection" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.terminationProtection"></a>

```java
public java.lang.Object getTerminationProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedDatabaseValkeyComponents <a name="ManagedDatabaseValkeyComponents" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponents.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_valkey.ManagedDatabaseValkeyComponents;

ManagedDatabaseValkeyComponents.builder()
    .build();
```


### ManagedDatabaseValkeyConfig <a name="ManagedDatabaseValkeyConfig" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_valkey.ManagedDatabaseValkeyConfig;

ManagedDatabaseValkeyConfig.builder()
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
    .name(java.lang.String)
    .plan(java.lang.String)
    .title(java.lang.String)
    .zone(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .maintenanceWindowDow(java.lang.String)
//  .maintenanceWindowTime(java.lang.String)
//  .network(IResolvable)
//  .network(java.util.List<ManagedDatabaseValkeyNetwork>)
//  .powered(java.lang.Boolean)
//  .powered(IResolvable)
//  .properties(ManagedDatabaseValkeyProperties)
//  .terminationProtection(java.lang.Boolean)
//  .terminationProtection(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.plan">plan</a></code> | <code>java.lang.String</code> | Service plan to use. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.title">title</a></code> | <code>java.lang.String</code> | Title of a managed database instance. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#id ManagedDatabaseValkey#id}. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User defined key-value pairs to classify the managed database. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.maintenanceWindowDow">maintenanceWindowDow</a></code> | <code>java.lang.String</code> | Maintenance window day of week. Lower case weekday name (monday, tuesday, ...). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.maintenanceWindowTime">maintenanceWindowTime</a></code> | <code>java.lang.String</code> | Maintenance window UTC time in hh:mm:ss format. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.network">network</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork">ManagedDatabaseValkeyNetwork</a>></code> | network block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.powered">powered</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The administrative power state of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties">ManagedDatabaseValkeyProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.terminationProtection">terminationProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, prevents the managed service from being powered off, or deleted. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the service.

The name is used as a prefix for the logical hostname. Must be unique within an account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#name ManagedDatabaseValkey#name}

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.plan"></a>

```java
public java.lang.String getPlan();
```

- *Type:* java.lang.String

Service plan to use.

This determines how much resources the instance will have. You can list available plans with `upctl database plans <type>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#plan ManagedDatabaseValkey#plan}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Title of a managed database instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#title ManagedDatabaseValkey#title}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#zone ManagedDatabaseValkey#zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#id ManagedDatabaseValkey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User defined key-value pairs to classify the managed database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#labels ManagedDatabaseValkey#labels}

---

##### `maintenanceWindowDow`<sup>Optional</sup> <a name="maintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.maintenanceWindowDow"></a>

```java
public java.lang.String getMaintenanceWindowDow();
```

- *Type:* java.lang.String

Maintenance window day of week. Lower case weekday name (monday, tuesday, ...).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#maintenance_window_dow ManagedDatabaseValkey#maintenance_window_dow}

---

##### `maintenanceWindowTime`<sup>Optional</sup> <a name="maintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.maintenanceWindowTime"></a>

```java
public java.lang.String getMaintenanceWindowTime();
```

- *Type:* java.lang.String

Maintenance window UTC time in hh:mm:ss format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#maintenance_window_time ManagedDatabaseValkey#maintenance_window_time}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.network"></a>

```java
public java.lang.Object getNetwork();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork">ManagedDatabaseValkeyNetwork</a>>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#network ManagedDatabaseValkey#network}

---

##### `powered`<sup>Optional</sup> <a name="powered" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.powered"></a>

```java
public java.lang.Object getPowered();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The administrative power state of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#powered ManagedDatabaseValkey#powered}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.properties"></a>

```java
public ManagedDatabaseValkeyProperties getProperties();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties">ManagedDatabaseValkeyProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#properties ManagedDatabaseValkey#properties}

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.terminationProtection"></a>

```java
public java.lang.Object getTerminationProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, prevents the managed service from being powered off, or deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#termination_protection ManagedDatabaseValkey#termination_protection}

---

### ManagedDatabaseValkeyNetwork <a name="ManagedDatabaseValkeyNetwork" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_valkey.ManagedDatabaseValkeyNetwork;

ManagedDatabaseValkeyNetwork.builder()
    .family(java.lang.String)
    .name(java.lang.String)
    .type(java.lang.String)
    .uuid(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork.property.family">family</a></code> | <code>java.lang.String</code> | Network family. Currently only `IPv4` is supported. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork.property.name">name</a></code> | <code>java.lang.String</code> | The name of the network. Must be unique within the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork.property.type">type</a></code> | <code>java.lang.String</code> | The type of the network. Must be private. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork.property.uuid">uuid</a></code> | <code>java.lang.String</code> | Private network UUID. Must reside in the same zone as the database. |

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork.property.family"></a>

```java
public java.lang.String getFamily();
```

- *Type:* java.lang.String

Network family. Currently only `IPv4` is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#family ManagedDatabaseValkey#family}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the network. Must be unique within the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#name ManagedDatabaseValkey#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the network. Must be private.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#type ManagedDatabaseValkey#type}

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

Private network UUID. Must reside in the same zone as the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#uuid ManagedDatabaseValkey#uuid}

---

### ManagedDatabaseValkeyNodeStates <a name="ManagedDatabaseValkeyNodeStates" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStates.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_valkey.ManagedDatabaseValkeyNodeStates;

ManagedDatabaseValkeyNodeStates.builder()
    .build();
```


### ManagedDatabaseValkeyProperties <a name="ManagedDatabaseValkeyProperties" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_valkey.ManagedDatabaseValkeyProperties;

ManagedDatabaseValkeyProperties.builder()
//  .automaticUtilityNetworkIpFilter(java.lang.Boolean)
//  .automaticUtilityNetworkIpFilter(IResolvable)
//  .backupHour(java.lang.Number)
//  .backupMinute(java.lang.Number)
//  .frequentSnapshots(java.lang.Boolean)
//  .frequentSnapshots(IResolvable)
//  .ipFilter(java.util.List<java.lang.String>)
//  .migration(ManagedDatabaseValkeyPropertiesMigration)
//  .publicAccess(java.lang.Boolean)
//  .publicAccess(IResolvable)
//  .serviceLog(java.lang.Boolean)
//  .serviceLog(IResolvable)
//  .valkeyAclChannelsDefault(java.lang.String)
//  .valkeyActiveExpireEffort(java.lang.Number)
//  .valkeyIoThreads(java.lang.Number)
//  .valkeyLfuDecayTime(java.lang.Number)
//  .valkeyLfuLogFactor(java.lang.Number)
//  .valkeyMaxmemoryPolicy(java.lang.String)
//  .valkeyNotifyKeyspaceEvents(java.lang.String)
//  .valkeyNumberOfDatabases(java.lang.Number)
//  .valkeyPersistence(java.lang.String)
//  .valkeyPubsubClientOutputBufferLimit(java.lang.Number)
//  .valkeySsl(java.lang.Boolean)
//  .valkeySsl(IResolvable)
//  .valkeyTimeout(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.automaticUtilityNetworkIpFilter">automaticUtilityNetworkIpFilter</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Automatic utility network IP Filter. Automatically allow connections from servers in the utility network within the same zone. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.backupHour">backupHour</a></code> | <code>java.lang.Number</code> | The hour of day (in UTC) when backup for the service is started. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.backupMinute">backupMinute</a></code> | <code>java.lang.Number</code> | The minute of an hour when backup for the service is started. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.frequentSnapshots">frequentSnapshots</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Frequent RDB snapshots. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.ipFilter">ipFilter</a></code> | <code>java.util.List<java.lang.String></code> | IP filter. Allow incoming connections from CIDR address block, e.g. '10.20.0.0/16'. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.migration">migration</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration">ManagedDatabaseValkeyPropertiesMigration</a></code> | migration block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.publicAccess">publicAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Public Access. Allow access to the service from the public Internet. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.serviceLog">serviceLog</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Service logging. Store logs for the service so that they are available in the HTTP API and console. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyAclChannelsDefault">valkeyAclChannelsDefault</a></code> | <code>java.lang.String</code> | Default ACL for pub/sub channels used when a Valkey user is created. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyActiveExpireEffort">valkeyActiveExpireEffort</a></code> | <code>java.lang.Number</code> | Active expire effort. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyIoThreads">valkeyIoThreads</a></code> | <code>java.lang.Number</code> | Valkey IO thread count. Set Valkey IO thread count. Changing this will cause a restart of the Valkey service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyLfuDecayTime">valkeyLfuDecayTime</a></code> | <code>java.lang.Number</code> | LFU maxmemory-policy counter decay time in minutes. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyLfuLogFactor">valkeyLfuLogFactor</a></code> | <code>java.lang.Number</code> | Counter logarithm factor for volatile-lfu and allkeys-lfu maxmemory-policies. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyMaxmemoryPolicy">valkeyMaxmemoryPolicy</a></code> | <code>java.lang.String</code> | Valkey maxmemory-policy. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyNotifyKeyspaceEvents">valkeyNotifyKeyspaceEvents</a></code> | <code>java.lang.String</code> | Set notify-keyspace-events option. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyNumberOfDatabases">valkeyNumberOfDatabases</a></code> | <code>java.lang.Number</code> | Number of Valkey databases. Set number of Valkey databases. Changing this will cause a restart of the Valkey service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyPersistence">valkeyPersistence</a></code> | <code>java.lang.String</code> | Valkey persistence. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyPubsubClientOutputBufferLimit">valkeyPubsubClientOutputBufferLimit</a></code> | <code>java.lang.Number</code> | Pub/sub client output buffer hard limit in MB. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeySsl">valkeySsl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Require SSL to access Valkey. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyTimeout">valkeyTimeout</a></code> | <code>java.lang.Number</code> | Valkey idle connection timeout in seconds. |

---

##### `automaticUtilityNetworkIpFilter`<sup>Optional</sup> <a name="automaticUtilityNetworkIpFilter" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.automaticUtilityNetworkIpFilter"></a>

```java
public java.lang.Object getAutomaticUtilityNetworkIpFilter();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Automatic utility network IP Filter. Automatically allow connections from servers in the utility network within the same zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#automatic_utility_network_ip_filter ManagedDatabaseValkey#automatic_utility_network_ip_filter}

---

##### `backupHour`<sup>Optional</sup> <a name="backupHour" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.backupHour"></a>

```java
public java.lang.Number getBackupHour();
```

- *Type:* java.lang.Number

The hour of day (in UTC) when backup for the service is started.

New backup is only started if previous backup has already completed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#backup_hour ManagedDatabaseValkey#backup_hour}

---

##### `backupMinute`<sup>Optional</sup> <a name="backupMinute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.backupMinute"></a>

```java
public java.lang.Number getBackupMinute();
```

- *Type:* java.lang.Number

The minute of an hour when backup for the service is started.

New backup is only started if previous backup has already completed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#backup_minute ManagedDatabaseValkey#backup_minute}

---

##### `frequentSnapshots`<sup>Optional</sup> <a name="frequentSnapshots" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.frequentSnapshots"></a>

```java
public java.lang.Object getFrequentSnapshots();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Frequent RDB snapshots.

When enabled, Valkey will create frequent local RDB snapshots. When disabled, Valkey will only take RDB snapshots when a backup is created, based on the backup schedule. This setting is ignored when `valkey_persistence` is set to `off`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#frequent_snapshots ManagedDatabaseValkey#frequent_snapshots}

---

##### `ipFilter`<sup>Optional</sup> <a name="ipFilter" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.ipFilter"></a>

```java
public java.util.List<java.lang.String> getIpFilter();
```

- *Type:* java.util.List<java.lang.String>

IP filter. Allow incoming connections from CIDR address block, e.g. '10.20.0.0/16'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#ip_filter ManagedDatabaseValkey#ip_filter}

---

##### `migration`<sup>Optional</sup> <a name="migration" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.migration"></a>

```java
public ManagedDatabaseValkeyPropertiesMigration getMigration();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration">ManagedDatabaseValkeyPropertiesMigration</a>

migration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#migration ManagedDatabaseValkey#migration}

---

##### `publicAccess`<sup>Optional</sup> <a name="publicAccess" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.publicAccess"></a>

```java
public java.lang.Object getPublicAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Public Access. Allow access to the service from the public Internet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#public_access ManagedDatabaseValkey#public_access}

---

##### `serviceLog`<sup>Optional</sup> <a name="serviceLog" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.serviceLog"></a>

```java
public java.lang.Object getServiceLog();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Service logging. Store logs for the service so that they are available in the HTTP API and console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#service_log ManagedDatabaseValkey#service_log}

---

##### `valkeyAclChannelsDefault`<sup>Optional</sup> <a name="valkeyAclChannelsDefault" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyAclChannelsDefault"></a>

```java
public java.lang.String getValkeyAclChannelsDefault();
```

- *Type:* java.lang.String

Default ACL for pub/sub channels used when a Valkey user is created.

Determines default pub/sub channels' ACL for new users if ACL is not supplied. When this option is not defined, all_channels is assumed to keep backward compatibility. This option doesn't affect Valkey configuration acl-pubsub-default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#valkey_acl_channels_default ManagedDatabaseValkey#valkey_acl_channels_default}

---

##### `valkeyActiveExpireEffort`<sup>Optional</sup> <a name="valkeyActiveExpireEffort" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyActiveExpireEffort"></a>

```java
public java.lang.Number getValkeyActiveExpireEffort();
```

- *Type:* java.lang.Number

Active expire effort.

Valkey reclaims expired keys both when accessed and in the background. The background process scans for expired keys to free memory. Increasing the active-expire-effort setting (default 1, max 10) uses more CPU to reclaim expired keys faster, reducing memory usage but potentially increasing latency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#valkey_active_expire_effort ManagedDatabaseValkey#valkey_active_expire_effort}

---

##### `valkeyIoThreads`<sup>Optional</sup> <a name="valkeyIoThreads" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyIoThreads"></a>

```java
public java.lang.Number getValkeyIoThreads();
```

- *Type:* java.lang.Number

Valkey IO thread count. Set Valkey IO thread count. Changing this will cause a restart of the Valkey service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#valkey_io_threads ManagedDatabaseValkey#valkey_io_threads}

---

##### `valkeyLfuDecayTime`<sup>Optional</sup> <a name="valkeyLfuDecayTime" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyLfuDecayTime"></a>

```java
public java.lang.Number getValkeyLfuDecayTime();
```

- *Type:* java.lang.Number

LFU maxmemory-policy counter decay time in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#valkey_lfu_decay_time ManagedDatabaseValkey#valkey_lfu_decay_time}

---

##### `valkeyLfuLogFactor`<sup>Optional</sup> <a name="valkeyLfuLogFactor" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyLfuLogFactor"></a>

```java
public java.lang.Number getValkeyLfuLogFactor();
```

- *Type:* java.lang.Number

Counter logarithm factor for volatile-lfu and allkeys-lfu maxmemory-policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#valkey_lfu_log_factor ManagedDatabaseValkey#valkey_lfu_log_factor}

---

##### `valkeyMaxmemoryPolicy`<sup>Optional</sup> <a name="valkeyMaxmemoryPolicy" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyMaxmemoryPolicy"></a>

```java
public java.lang.String getValkeyMaxmemoryPolicy();
```

- *Type:* java.lang.String

Valkey maxmemory-policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#valkey_maxmemory_policy ManagedDatabaseValkey#valkey_maxmemory_policy}

---

##### `valkeyNotifyKeyspaceEvents`<sup>Optional</sup> <a name="valkeyNotifyKeyspaceEvents" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyNotifyKeyspaceEvents"></a>

```java
public java.lang.String getValkeyNotifyKeyspaceEvents();
```

- *Type:* java.lang.String

Set notify-keyspace-events option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#valkey_notify_keyspace_events ManagedDatabaseValkey#valkey_notify_keyspace_events}

---

##### `valkeyNumberOfDatabases`<sup>Optional</sup> <a name="valkeyNumberOfDatabases" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyNumberOfDatabases"></a>

```java
public java.lang.Number getValkeyNumberOfDatabases();
```

- *Type:* java.lang.Number

Number of Valkey databases. Set number of Valkey databases. Changing this will cause a restart of the Valkey service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#valkey_number_of_databases ManagedDatabaseValkey#valkey_number_of_databases}

---

##### `valkeyPersistence`<sup>Optional</sup> <a name="valkeyPersistence" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyPersistence"></a>

```java
public java.lang.String getValkeyPersistence();
```

- *Type:* java.lang.String

Valkey persistence.

When persistence is 'rdb', Valkey does RDB dumps each 10 minutes if any key is changed. Also RDB dumps are done according to backup schedule for backup purposes. When persistence is 'off', no RDB dumps and backups are done, so data can be lost at any moment if service is restarted for any reason, or if service is powered off. Also service can't be forked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#valkey_persistence ManagedDatabaseValkey#valkey_persistence}

---

##### `valkeyPubsubClientOutputBufferLimit`<sup>Optional</sup> <a name="valkeyPubsubClientOutputBufferLimit" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyPubsubClientOutputBufferLimit"></a>

```java
public java.lang.Number getValkeyPubsubClientOutputBufferLimit();
```

- *Type:* java.lang.Number

Pub/sub client output buffer hard limit in MB.

Set output buffer limit for pub / sub clients in MB. The value is the hard limit, the soft limit is 1/4 of the hard limit. When setting the limit, be mindful of the available memory in the selected service plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#valkey_pubsub_client_output_buffer_limit ManagedDatabaseValkey#valkey_pubsub_client_output_buffer_limit}

---

##### `valkeySsl`<sup>Optional</sup> <a name="valkeySsl" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeySsl"></a>

```java
public java.lang.Object getValkeySsl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Require SSL to access Valkey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#valkey_ssl ManagedDatabaseValkey#valkey_ssl}

---

##### `valkeyTimeout`<sup>Optional</sup> <a name="valkeyTimeout" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyTimeout"></a>

```java
public java.lang.Number getValkeyTimeout();
```

- *Type:* java.lang.Number

Valkey idle connection timeout in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#valkey_timeout ManagedDatabaseValkey#valkey_timeout}

---

### ManagedDatabaseValkeyPropertiesMigration <a name="ManagedDatabaseValkeyPropertiesMigration" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_valkey.ManagedDatabaseValkeyPropertiesMigration;

ManagedDatabaseValkeyPropertiesMigration.builder()
//  .dbname(java.lang.String)
//  .host(java.lang.String)
//  .ignoreDbs(java.lang.String)
//  .ignoreRoles(java.lang.String)
//  .method(java.lang.String)
//  .password(java.lang.String)
//  .port(java.lang.Number)
//  .ssl(java.lang.Boolean)
//  .ssl(IResolvable)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.dbname">dbname</a></code> | <code>java.lang.String</code> | Database name for bootstrapping the initial connection. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.host">host</a></code> | <code>java.lang.String</code> | Hostname or IP address of the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.ignoreDbs">ignoreDbs</a></code> | <code>java.lang.String</code> | Comma-separated list of databases, which should be ignored during migration (supported by MySQL and PostgreSQL only at the moment). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.ignoreRoles">ignoreRoles</a></code> | <code>java.lang.String</code> | Comma-separated list of database roles, which should be ignored during migration (supported by PostgreSQL only at the moment). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.method">method</a></code> | <code>java.lang.String</code> | The migration method to be used (currently supported only by Redis, Dragonfly, MySQL and PostgreSQL service types). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.password">password</a></code> | <code>java.lang.String</code> | Password for authentication with the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.port">port</a></code> | <code>java.lang.Number</code> | Port number of the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.ssl">ssl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The server where to migrate data from is secured with SSL. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.username">username</a></code> | <code>java.lang.String</code> | User name for authentication with the server where to migrate data from. |

---

##### `dbname`<sup>Optional</sup> <a name="dbname" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.dbname"></a>

```java
public java.lang.String getDbname();
```

- *Type:* java.lang.String

Database name for bootstrapping the initial connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#dbname ManagedDatabaseValkey#dbname}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

Hostname or IP address of the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#host ManagedDatabaseValkey#host}

---

##### `ignoreDbs`<sup>Optional</sup> <a name="ignoreDbs" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.ignoreDbs"></a>

```java
public java.lang.String getIgnoreDbs();
```

- *Type:* java.lang.String

Comma-separated list of databases, which should be ignored during migration (supported by MySQL and PostgreSQL only at the moment).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#ignore_dbs ManagedDatabaseValkey#ignore_dbs}

---

##### `ignoreRoles`<sup>Optional</sup> <a name="ignoreRoles" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.ignoreRoles"></a>

```java
public java.lang.String getIgnoreRoles();
```

- *Type:* java.lang.String

Comma-separated list of database roles, which should be ignored during migration (supported by PostgreSQL only at the moment).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#ignore_roles ManagedDatabaseValkey#ignore_roles}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

The migration method to be used (currently supported only by Redis, Dragonfly, MySQL and PostgreSQL service types).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#method ManagedDatabaseValkey#method}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Password for authentication with the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#password ManagedDatabaseValkey#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Port number of the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#port ManagedDatabaseValkey#port}

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.ssl"></a>

```java
public java.lang.Object getSsl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The server where to migrate data from is secured with SSL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#ssl ManagedDatabaseValkey#ssl}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

User name for authentication with the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/managed_database_valkey#username ManagedDatabaseValkey#username}

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedDatabaseValkeyComponentsList <a name="ManagedDatabaseValkeyComponentsList" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_valkey.ManagedDatabaseValkeyComponentsList;

new ManagedDatabaseValkeyComponentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.get"></a>

```java
public ManagedDatabaseValkeyComponentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ManagedDatabaseValkeyComponentsOutputReference <a name="ManagedDatabaseValkeyComponentsOutputReference" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_valkey.ManagedDatabaseValkeyComponentsOutputReference;

new ManagedDatabaseValkeyComponentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.component">component</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.route">route</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.usage">usage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponents">ManagedDatabaseValkeyComponents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.component"></a>

```java
public java.lang.String getComponent();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.route"></a>

```java
public java.lang.String getRoute();
```

- *Type:* java.lang.String

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.usage"></a>

```java
public java.lang.String getUsage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.internalValue"></a>

```java
public ManagedDatabaseValkeyComponents getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponents">ManagedDatabaseValkeyComponents</a>

---


### ManagedDatabaseValkeyNetworkList <a name="ManagedDatabaseValkeyNetworkList" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_valkey.ManagedDatabaseValkeyNetworkList;

new ManagedDatabaseValkeyNetworkList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.get"></a>

```java
public ManagedDatabaseValkeyNetworkOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork">ManagedDatabaseValkeyNetwork</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork">ManagedDatabaseValkeyNetwork</a>>

---


### ManagedDatabaseValkeyNetworkOutputReference <a name="ManagedDatabaseValkeyNetworkOutputReference" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_valkey.ManagedDatabaseValkeyNetworkOutputReference;

new ManagedDatabaseValkeyNetworkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.familyInput">familyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.uuidInput">uuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.family">family</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.uuid">uuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork">ManagedDatabaseValkeyNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `familyInput`<sup>Optional</sup> <a name="familyInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.familyInput"></a>

```java
public java.lang.String getFamilyInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `uuidInput`<sup>Optional</sup> <a name="uuidInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.uuidInput"></a>

```java
public java.lang.String getUuidInput();
```

- *Type:* java.lang.String

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.family"></a>

```java
public java.lang.String getFamily();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork">ManagedDatabaseValkeyNetwork</a>

---


### ManagedDatabaseValkeyNodeStatesList <a name="ManagedDatabaseValkeyNodeStatesList" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_valkey.ManagedDatabaseValkeyNodeStatesList;

new ManagedDatabaseValkeyNodeStatesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.get"></a>

```java
public ManagedDatabaseValkeyNodeStatesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ManagedDatabaseValkeyNodeStatesOutputReference <a name="ManagedDatabaseValkeyNodeStatesOutputReference" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_valkey.ManagedDatabaseValkeyNodeStatesOutputReference;

new ManagedDatabaseValkeyNodeStatesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStates">ManagedDatabaseValkeyNodeStates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.internalValue"></a>

```java
public ManagedDatabaseValkeyNodeStates getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStates">ManagedDatabaseValkeyNodeStates</a>

---


### ManagedDatabaseValkeyPropertiesMigrationOutputReference <a name="ManagedDatabaseValkeyPropertiesMigrationOutputReference" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_valkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference;

new ManagedDatabaseValkeyPropertiesMigrationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetDbname">resetDbname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetIgnoreDbs">resetIgnoreDbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetIgnoreRoles">resetIgnoreRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetSsl">resetSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDbname` <a name="resetDbname" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetDbname"></a>

```java
public void resetDbname()
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetHost"></a>

```java
public void resetHost()
```

##### `resetIgnoreDbs` <a name="resetIgnoreDbs" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetIgnoreDbs"></a>

```java
public void resetIgnoreDbs()
```

##### `resetIgnoreRoles` <a name="resetIgnoreRoles" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetIgnoreRoles"></a>

```java
public void resetIgnoreRoles()
```

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetMethod"></a>

```java
public void resetMethod()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetSsl` <a name="resetSsl" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetSsl"></a>

```java
public void resetSsl()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetUsername"></a>

```java
public void resetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.dbnameInput">dbnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.ignoreDbsInput">ignoreDbsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.ignoreRolesInput">ignoreRolesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.methodInput">methodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.sslInput">sslInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.dbname">dbname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.ignoreDbs">ignoreDbs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.ignoreRoles">ignoreRoles</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.ssl">ssl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration">ManagedDatabaseValkeyPropertiesMigration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dbnameInput`<sup>Optional</sup> <a name="dbnameInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.dbnameInput"></a>

```java
public java.lang.String getDbnameInput();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `ignoreDbsInput`<sup>Optional</sup> <a name="ignoreDbsInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.ignoreDbsInput"></a>

```java
public java.lang.String getIgnoreDbsInput();
```

- *Type:* java.lang.String

---

##### `ignoreRolesInput`<sup>Optional</sup> <a name="ignoreRolesInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.ignoreRolesInput"></a>

```java
public java.lang.String getIgnoreRolesInput();
```

- *Type:* java.lang.String

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.methodInput"></a>

```java
public java.lang.String getMethodInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `sslInput`<sup>Optional</sup> <a name="sslInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.sslInput"></a>

```java
public java.lang.Object getSslInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `dbname`<sup>Required</sup> <a name="dbname" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.dbname"></a>

```java
public java.lang.String getDbname();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `ignoreDbs`<sup>Required</sup> <a name="ignoreDbs" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.ignoreDbs"></a>

```java
public java.lang.String getIgnoreDbs();
```

- *Type:* java.lang.String

---

##### `ignoreRoles`<sup>Required</sup> <a name="ignoreRoles" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.ignoreRoles"></a>

```java
public java.lang.String getIgnoreRoles();
```

- *Type:* java.lang.String

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.ssl"></a>

```java
public java.lang.Object getSsl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.internalValue"></a>

```java
public ManagedDatabaseValkeyPropertiesMigration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration">ManagedDatabaseValkeyPropertiesMigration</a>

---


### ManagedDatabaseValkeyPropertiesOutputReference <a name="ManagedDatabaseValkeyPropertiesOutputReference" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_valkey.ManagedDatabaseValkeyPropertiesOutputReference;

new ManagedDatabaseValkeyPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.putMigration">putMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetAutomaticUtilityNetworkIpFilter">resetAutomaticUtilityNetworkIpFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetBackupHour">resetBackupHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetBackupMinute">resetBackupMinute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetFrequentSnapshots">resetFrequentSnapshots</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetIpFilter">resetIpFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetMigration">resetMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetPublicAccess">resetPublicAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetServiceLog">resetServiceLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyAclChannelsDefault">resetValkeyAclChannelsDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyActiveExpireEffort">resetValkeyActiveExpireEffort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyIoThreads">resetValkeyIoThreads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyLfuDecayTime">resetValkeyLfuDecayTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyLfuLogFactor">resetValkeyLfuLogFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyMaxmemoryPolicy">resetValkeyMaxmemoryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyNotifyKeyspaceEvents">resetValkeyNotifyKeyspaceEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyNumberOfDatabases">resetValkeyNumberOfDatabases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyPersistence">resetValkeyPersistence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyPubsubClientOutputBufferLimit">resetValkeyPubsubClientOutputBufferLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeySsl">resetValkeySsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyTimeout">resetValkeyTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMigration` <a name="putMigration" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.putMigration"></a>

```java
public void putMigration(ManagedDatabaseValkeyPropertiesMigration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.putMigration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration">ManagedDatabaseValkeyPropertiesMigration</a>

---

##### `resetAutomaticUtilityNetworkIpFilter` <a name="resetAutomaticUtilityNetworkIpFilter" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetAutomaticUtilityNetworkIpFilter"></a>

```java
public void resetAutomaticUtilityNetworkIpFilter()
```

##### `resetBackupHour` <a name="resetBackupHour" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetBackupHour"></a>

```java
public void resetBackupHour()
```

##### `resetBackupMinute` <a name="resetBackupMinute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetBackupMinute"></a>

```java
public void resetBackupMinute()
```

##### `resetFrequentSnapshots` <a name="resetFrequentSnapshots" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetFrequentSnapshots"></a>

```java
public void resetFrequentSnapshots()
```

##### `resetIpFilter` <a name="resetIpFilter" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetIpFilter"></a>

```java
public void resetIpFilter()
```

##### `resetMigration` <a name="resetMigration" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetMigration"></a>

```java
public void resetMigration()
```

##### `resetPublicAccess` <a name="resetPublicAccess" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetPublicAccess"></a>

```java
public void resetPublicAccess()
```

##### `resetServiceLog` <a name="resetServiceLog" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetServiceLog"></a>

```java
public void resetServiceLog()
```

##### `resetValkeyAclChannelsDefault` <a name="resetValkeyAclChannelsDefault" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyAclChannelsDefault"></a>

```java
public void resetValkeyAclChannelsDefault()
```

##### `resetValkeyActiveExpireEffort` <a name="resetValkeyActiveExpireEffort" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyActiveExpireEffort"></a>

```java
public void resetValkeyActiveExpireEffort()
```

##### `resetValkeyIoThreads` <a name="resetValkeyIoThreads" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyIoThreads"></a>

```java
public void resetValkeyIoThreads()
```

##### `resetValkeyLfuDecayTime` <a name="resetValkeyLfuDecayTime" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyLfuDecayTime"></a>

```java
public void resetValkeyLfuDecayTime()
```

##### `resetValkeyLfuLogFactor` <a name="resetValkeyLfuLogFactor" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyLfuLogFactor"></a>

```java
public void resetValkeyLfuLogFactor()
```

##### `resetValkeyMaxmemoryPolicy` <a name="resetValkeyMaxmemoryPolicy" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyMaxmemoryPolicy"></a>

```java
public void resetValkeyMaxmemoryPolicy()
```

##### `resetValkeyNotifyKeyspaceEvents` <a name="resetValkeyNotifyKeyspaceEvents" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyNotifyKeyspaceEvents"></a>

```java
public void resetValkeyNotifyKeyspaceEvents()
```

##### `resetValkeyNumberOfDatabases` <a name="resetValkeyNumberOfDatabases" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyNumberOfDatabases"></a>

```java
public void resetValkeyNumberOfDatabases()
```

##### `resetValkeyPersistence` <a name="resetValkeyPersistence" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyPersistence"></a>

```java
public void resetValkeyPersistence()
```

##### `resetValkeyPubsubClientOutputBufferLimit` <a name="resetValkeyPubsubClientOutputBufferLimit" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyPubsubClientOutputBufferLimit"></a>

```java
public void resetValkeyPubsubClientOutputBufferLimit()
```

##### `resetValkeySsl` <a name="resetValkeySsl" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeySsl"></a>

```java
public void resetValkeySsl()
```

##### `resetValkeyTimeout` <a name="resetValkeyTimeout" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyTimeout"></a>

```java
public void resetValkeyTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.migration">migration</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference">ManagedDatabaseValkeyPropertiesMigrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.automaticUtilityNetworkIpFilterInput">automaticUtilityNetworkIpFilterInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.backupHourInput">backupHourInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.backupMinuteInput">backupMinuteInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.frequentSnapshotsInput">frequentSnapshotsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.ipFilterInput">ipFilterInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.migrationInput">migrationInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration">ManagedDatabaseValkeyPropertiesMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.publicAccessInput">publicAccessInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.serviceLogInput">serviceLogInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyAclChannelsDefaultInput">valkeyAclChannelsDefaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyActiveExpireEffortInput">valkeyActiveExpireEffortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyIoThreadsInput">valkeyIoThreadsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyLfuDecayTimeInput">valkeyLfuDecayTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyLfuLogFactorInput">valkeyLfuLogFactorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyMaxmemoryPolicyInput">valkeyMaxmemoryPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyNotifyKeyspaceEventsInput">valkeyNotifyKeyspaceEventsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyNumberOfDatabasesInput">valkeyNumberOfDatabasesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyPersistenceInput">valkeyPersistenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyPubsubClientOutputBufferLimitInput">valkeyPubsubClientOutputBufferLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeySslInput">valkeySslInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyTimeoutInput">valkeyTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.automaticUtilityNetworkIpFilter">automaticUtilityNetworkIpFilter</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.backupHour">backupHour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.backupMinute">backupMinute</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.frequentSnapshots">frequentSnapshots</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.ipFilter">ipFilter</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.publicAccess">publicAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.serviceLog">serviceLog</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyAclChannelsDefault">valkeyAclChannelsDefault</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyActiveExpireEffort">valkeyActiveExpireEffort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyIoThreads">valkeyIoThreads</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyLfuDecayTime">valkeyLfuDecayTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyLfuLogFactor">valkeyLfuLogFactor</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyMaxmemoryPolicy">valkeyMaxmemoryPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyNotifyKeyspaceEvents">valkeyNotifyKeyspaceEvents</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyNumberOfDatabases">valkeyNumberOfDatabases</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyPersistence">valkeyPersistence</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyPubsubClientOutputBufferLimit">valkeyPubsubClientOutputBufferLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeySsl">valkeySsl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyTimeout">valkeyTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties">ManagedDatabaseValkeyProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `migration`<sup>Required</sup> <a name="migration" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.migration"></a>

```java
public ManagedDatabaseValkeyPropertiesMigrationOutputReference getMigration();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference">ManagedDatabaseValkeyPropertiesMigrationOutputReference</a>

---

##### `automaticUtilityNetworkIpFilterInput`<sup>Optional</sup> <a name="automaticUtilityNetworkIpFilterInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.automaticUtilityNetworkIpFilterInput"></a>

```java
public java.lang.Object getAutomaticUtilityNetworkIpFilterInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `backupHourInput`<sup>Optional</sup> <a name="backupHourInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.backupHourInput"></a>

```java
public java.lang.Number getBackupHourInput();
```

- *Type:* java.lang.Number

---

##### `backupMinuteInput`<sup>Optional</sup> <a name="backupMinuteInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.backupMinuteInput"></a>

```java
public java.lang.Number getBackupMinuteInput();
```

- *Type:* java.lang.Number

---

##### `frequentSnapshotsInput`<sup>Optional</sup> <a name="frequentSnapshotsInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.frequentSnapshotsInput"></a>

```java
public java.lang.Object getFrequentSnapshotsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ipFilterInput`<sup>Optional</sup> <a name="ipFilterInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.ipFilterInput"></a>

```java
public java.util.List<java.lang.String> getIpFilterInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `migrationInput`<sup>Optional</sup> <a name="migrationInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.migrationInput"></a>

```java
public ManagedDatabaseValkeyPropertiesMigration getMigrationInput();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration">ManagedDatabaseValkeyPropertiesMigration</a>

---

##### `publicAccessInput`<sup>Optional</sup> <a name="publicAccessInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.publicAccessInput"></a>

```java
public java.lang.Object getPublicAccessInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serviceLogInput`<sup>Optional</sup> <a name="serviceLogInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.serviceLogInput"></a>

```java
public java.lang.Object getServiceLogInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valkeyAclChannelsDefaultInput`<sup>Optional</sup> <a name="valkeyAclChannelsDefaultInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyAclChannelsDefaultInput"></a>

```java
public java.lang.String getValkeyAclChannelsDefaultInput();
```

- *Type:* java.lang.String

---

##### `valkeyActiveExpireEffortInput`<sup>Optional</sup> <a name="valkeyActiveExpireEffortInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyActiveExpireEffortInput"></a>

```java
public java.lang.Number getValkeyActiveExpireEffortInput();
```

- *Type:* java.lang.Number

---

##### `valkeyIoThreadsInput`<sup>Optional</sup> <a name="valkeyIoThreadsInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyIoThreadsInput"></a>

```java
public java.lang.Number getValkeyIoThreadsInput();
```

- *Type:* java.lang.Number

---

##### `valkeyLfuDecayTimeInput`<sup>Optional</sup> <a name="valkeyLfuDecayTimeInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyLfuDecayTimeInput"></a>

```java
public java.lang.Number getValkeyLfuDecayTimeInput();
```

- *Type:* java.lang.Number

---

##### `valkeyLfuLogFactorInput`<sup>Optional</sup> <a name="valkeyLfuLogFactorInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyLfuLogFactorInput"></a>

```java
public java.lang.Number getValkeyLfuLogFactorInput();
```

- *Type:* java.lang.Number

---

##### `valkeyMaxmemoryPolicyInput`<sup>Optional</sup> <a name="valkeyMaxmemoryPolicyInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyMaxmemoryPolicyInput"></a>

```java
public java.lang.String getValkeyMaxmemoryPolicyInput();
```

- *Type:* java.lang.String

---

##### `valkeyNotifyKeyspaceEventsInput`<sup>Optional</sup> <a name="valkeyNotifyKeyspaceEventsInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyNotifyKeyspaceEventsInput"></a>

```java
public java.lang.String getValkeyNotifyKeyspaceEventsInput();
```

- *Type:* java.lang.String

---

##### `valkeyNumberOfDatabasesInput`<sup>Optional</sup> <a name="valkeyNumberOfDatabasesInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyNumberOfDatabasesInput"></a>

```java
public java.lang.Number getValkeyNumberOfDatabasesInput();
```

- *Type:* java.lang.Number

---

##### `valkeyPersistenceInput`<sup>Optional</sup> <a name="valkeyPersistenceInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyPersistenceInput"></a>

```java
public java.lang.String getValkeyPersistenceInput();
```

- *Type:* java.lang.String

---

##### `valkeyPubsubClientOutputBufferLimitInput`<sup>Optional</sup> <a name="valkeyPubsubClientOutputBufferLimitInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyPubsubClientOutputBufferLimitInput"></a>

```java
public java.lang.Number getValkeyPubsubClientOutputBufferLimitInput();
```

- *Type:* java.lang.Number

---

##### `valkeySslInput`<sup>Optional</sup> <a name="valkeySslInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeySslInput"></a>

```java
public java.lang.Object getValkeySslInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valkeyTimeoutInput`<sup>Optional</sup> <a name="valkeyTimeoutInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyTimeoutInput"></a>

```java
public java.lang.Number getValkeyTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `automaticUtilityNetworkIpFilter`<sup>Required</sup> <a name="automaticUtilityNetworkIpFilter" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.automaticUtilityNetworkIpFilter"></a>

```java
public java.lang.Object getAutomaticUtilityNetworkIpFilter();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `backupHour`<sup>Required</sup> <a name="backupHour" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.backupHour"></a>

```java
public java.lang.Number getBackupHour();
```

- *Type:* java.lang.Number

---

##### `backupMinute`<sup>Required</sup> <a name="backupMinute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.backupMinute"></a>

```java
public java.lang.Number getBackupMinute();
```

- *Type:* java.lang.Number

---

##### `frequentSnapshots`<sup>Required</sup> <a name="frequentSnapshots" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.frequentSnapshots"></a>

```java
public java.lang.Object getFrequentSnapshots();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ipFilter`<sup>Required</sup> <a name="ipFilter" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.ipFilter"></a>

```java
public java.util.List<java.lang.String> getIpFilter();
```

- *Type:* java.util.List<java.lang.String>

---

##### `publicAccess`<sup>Required</sup> <a name="publicAccess" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.publicAccess"></a>

```java
public java.lang.Object getPublicAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serviceLog`<sup>Required</sup> <a name="serviceLog" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.serviceLog"></a>

```java
public java.lang.Object getServiceLog();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valkeyAclChannelsDefault`<sup>Required</sup> <a name="valkeyAclChannelsDefault" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyAclChannelsDefault"></a>

```java
public java.lang.String getValkeyAclChannelsDefault();
```

- *Type:* java.lang.String

---

##### `valkeyActiveExpireEffort`<sup>Required</sup> <a name="valkeyActiveExpireEffort" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyActiveExpireEffort"></a>

```java
public java.lang.Number getValkeyActiveExpireEffort();
```

- *Type:* java.lang.Number

---

##### `valkeyIoThreads`<sup>Required</sup> <a name="valkeyIoThreads" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyIoThreads"></a>

```java
public java.lang.Number getValkeyIoThreads();
```

- *Type:* java.lang.Number

---

##### `valkeyLfuDecayTime`<sup>Required</sup> <a name="valkeyLfuDecayTime" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyLfuDecayTime"></a>

```java
public java.lang.Number getValkeyLfuDecayTime();
```

- *Type:* java.lang.Number

---

##### `valkeyLfuLogFactor`<sup>Required</sup> <a name="valkeyLfuLogFactor" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyLfuLogFactor"></a>

```java
public java.lang.Number getValkeyLfuLogFactor();
```

- *Type:* java.lang.Number

---

##### `valkeyMaxmemoryPolicy`<sup>Required</sup> <a name="valkeyMaxmemoryPolicy" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyMaxmemoryPolicy"></a>

```java
public java.lang.String getValkeyMaxmemoryPolicy();
```

- *Type:* java.lang.String

---

##### `valkeyNotifyKeyspaceEvents`<sup>Required</sup> <a name="valkeyNotifyKeyspaceEvents" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyNotifyKeyspaceEvents"></a>

```java
public java.lang.String getValkeyNotifyKeyspaceEvents();
```

- *Type:* java.lang.String

---

##### `valkeyNumberOfDatabases`<sup>Required</sup> <a name="valkeyNumberOfDatabases" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyNumberOfDatabases"></a>

```java
public java.lang.Number getValkeyNumberOfDatabases();
```

- *Type:* java.lang.Number

---

##### `valkeyPersistence`<sup>Required</sup> <a name="valkeyPersistence" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyPersistence"></a>

```java
public java.lang.String getValkeyPersistence();
```

- *Type:* java.lang.String

---

##### `valkeyPubsubClientOutputBufferLimit`<sup>Required</sup> <a name="valkeyPubsubClientOutputBufferLimit" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyPubsubClientOutputBufferLimit"></a>

```java
public java.lang.Number getValkeyPubsubClientOutputBufferLimit();
```

- *Type:* java.lang.Number

---

##### `valkeySsl`<sup>Required</sup> <a name="valkeySsl" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeySsl"></a>

```java
public java.lang.Object getValkeySsl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valkeyTimeout`<sup>Required</sup> <a name="valkeyTimeout" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyTimeout"></a>

```java
public java.lang.Number getValkeyTimeout();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.internalValue"></a>

```java
public ManagedDatabaseValkeyProperties getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties">ManagedDatabaseValkeyProperties</a>

---



