# `managedObjectStorage` Submodule <a name="`managedObjectStorage` Submodule" id="@cdktf/provider-upcloud.managedObjectStorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedObjectStorage <a name="ManagedObjectStorage" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/resources/managed_object_storage upcloud_managed_object_storage}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_object_storage.ManagedObjectStorage;

ManagedObjectStorage.Builder.create(Construct scope, java.lang.String id)
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
    .configuredStatus(java.lang.String)
    .name(java.lang.String)
    .region(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .network(IResolvable)
//  .network(java.util.List<ManagedObjectStorageNetwork>)
//  .users(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.configuredStatus">configuredStatus</a></code> | <code>java.lang.String</code> | Service status managed by the end user. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the Managed Object Storage service. Must be unique within account. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region in which the service will be hosted, see `upcloud_managed_object_storage_regions` data source. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/resources/managed_object_storage#id ManagedObjectStorage#id}. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Key-value pairs to classify the managed object storage. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.network">network</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork">ManagedObjectStorageNetwork</a>></code> | network block. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.users">users</a></code> | <code>java.util.List<java.lang.String></code> | List of UpCloud API users allowed to use object storage. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `configuredStatus`<sup>Required</sup> <a name="configuredStatus" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.configuredStatus"></a>

- *Type:* java.lang.String

Service status managed by the end user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/resources/managed_object_storage#configured_status ManagedObjectStorage#configured_status}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the Managed Object Storage service. Must be unique within account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/resources/managed_object_storage#name ManagedObjectStorage#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region in which the service will be hosted, see `upcloud_managed_object_storage_regions` data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/resources/managed_object_storage#region ManagedObjectStorage#region}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/resources/managed_object_storage#id ManagedObjectStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Key-value pairs to classify the managed object storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/resources/managed_object_storage#labels ManagedObjectStorage#labels}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.network"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork">ManagedObjectStorageNetwork</a>>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/resources/managed_object_storage#network ManagedObjectStorage#network}

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.users"></a>

- *Type:* java.util.List<java.lang.String>

List of UpCloud API users allowed to use object storage.

Valid values include current account and it's sub-accounts. See `upcloud_managed_object_storage_user_access_key` for managing access keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/resources/managed_object_storage#users ManagedObjectStorage#users}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.putNetwork">putNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.resetUsers">resetUsers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNetwork` <a name="putNetwork" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.putNetwork"></a>

```java
public void putNetwork(IResolvable OR java.util.List<ManagedObjectStorageNetwork> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.putNetwork.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork">ManagedObjectStorageNetwork</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetUsers` <a name="resetUsers" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.resetUsers"></a>

```java
public void resetUsers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ManagedObjectStorage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_object_storage.ManagedObjectStorage;

ManagedObjectStorage.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_object_storage.ManagedObjectStorage;

ManagedObjectStorage.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_object_storage.ManagedObjectStorage;

ManagedObjectStorage.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_object_storage.ManagedObjectStorage;

ManagedObjectStorage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ManagedObjectStorage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ManagedObjectStorage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ManagedObjectStorage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ManagedObjectStorage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/resources/managed_object_storage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ManagedObjectStorage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.endpoint">endpoint</a></code> | <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList">ManagedObjectStorageEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.network">network</a></code> | <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList">ManagedObjectStorageNetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.operationalState">operationalState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.configuredStatusInput">configuredStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.networkInput">networkInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork">ManagedObjectStorageNetwork</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.usersInput">usersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.configuredStatus">configuredStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.users">users</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.endpoint"></a>

```java
public ManagedObjectStorageEndpointList getEndpoint();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList">ManagedObjectStorageEndpointList</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.network"></a>

```java
public ManagedObjectStorageNetworkList getNetwork();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList">ManagedObjectStorageNetworkList</a>

---

##### `operationalState`<sup>Required</sup> <a name="operationalState" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.operationalState"></a>

```java
public java.lang.String getOperationalState();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `configuredStatusInput`<sup>Optional</sup> <a name="configuredStatusInput" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.configuredStatusInput"></a>

```java
public java.lang.String getConfiguredStatusInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.networkInput"></a>

```java
public java.lang.Object getNetworkInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork">ManagedObjectStorageNetwork</a>>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `usersInput`<sup>Optional</sup> <a name="usersInput" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.usersInput"></a>

```java
public java.util.List<java.lang.String> getUsersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `configuredStatus`<sup>Required</sup> <a name="configuredStatus" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.configuredStatus"></a>

```java
public java.lang.String getConfiguredStatus();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.users"></a>

```java
public java.util.List<java.lang.String> getUsers();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedObjectStorageConfig <a name="ManagedObjectStorageConfig" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_object_storage.ManagedObjectStorageConfig;

ManagedObjectStorageConfig.builder()
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
    .configuredStatus(java.lang.String)
    .name(java.lang.String)
    .region(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .network(IResolvable)
//  .network(java.util.List<ManagedObjectStorageNetwork>)
//  .users(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.configuredStatus">configuredStatus</a></code> | <code>java.lang.String</code> | Service status managed by the end user. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the Managed Object Storage service. Must be unique within account. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region in which the service will be hosted, see `upcloud_managed_object_storage_regions` data source. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/resources/managed_object_storage#id ManagedObjectStorage#id}. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Key-value pairs to classify the managed object storage. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.network">network</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork">ManagedObjectStorageNetwork</a>></code> | network block. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.users">users</a></code> | <code>java.util.List<java.lang.String></code> | List of UpCloud API users allowed to use object storage. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `configuredStatus`<sup>Required</sup> <a name="configuredStatus" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.configuredStatus"></a>

```java
public java.lang.String getConfiguredStatus();
```

- *Type:* java.lang.String

Service status managed by the end user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/resources/managed_object_storage#configured_status ManagedObjectStorage#configured_status}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the Managed Object Storage service. Must be unique within account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/resources/managed_object_storage#name ManagedObjectStorage#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region in which the service will be hosted, see `upcloud_managed_object_storage_regions` data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/resources/managed_object_storage#region ManagedObjectStorage#region}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/resources/managed_object_storage#id ManagedObjectStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Key-value pairs to classify the managed object storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/resources/managed_object_storage#labels ManagedObjectStorage#labels}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.network"></a>

```java
public java.lang.Object getNetwork();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork">ManagedObjectStorageNetwork</a>>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/resources/managed_object_storage#network ManagedObjectStorage#network}

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.users"></a>

```java
public java.util.List<java.lang.String> getUsers();
```

- *Type:* java.util.List<java.lang.String>

List of UpCloud API users allowed to use object storage.

Valid values include current account and it's sub-accounts. See `upcloud_managed_object_storage_user_access_key` for managing access keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/resources/managed_object_storage#users ManagedObjectStorage#users}

---

### ManagedObjectStorageEndpoint <a name="ManagedObjectStorageEndpoint" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_object_storage.ManagedObjectStorageEndpoint;

ManagedObjectStorageEndpoint.builder()
    .build();
```


### ManagedObjectStorageNetwork <a name="ManagedObjectStorageNetwork" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_object_storage.ManagedObjectStorageNetwork;

ManagedObjectStorageNetwork.builder()
    .family(java.lang.String)
    .name(java.lang.String)
    .type(java.lang.String)
//  .uuid(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork.property.family">family</a></code> | <code>java.lang.String</code> | Network family. IPv6 currently not supported. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork.property.name">name</a></code> | <code>java.lang.String</code> | Network name. Must be unique within the service. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork.property.type">type</a></code> | <code>java.lang.String</code> | Network type. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork.property.uuid">uuid</a></code> | <code>java.lang.String</code> | Private network uuid. For public networks the field should be omitted. |

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork.property.family"></a>

```java
public java.lang.String getFamily();
```

- *Type:* java.lang.String

Network family. IPv6 currently not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/resources/managed_object_storage#family ManagedObjectStorage#family}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Network name. Must be unique within the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/resources/managed_object_storage#name ManagedObjectStorage#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Network type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/resources/managed_object_storage#type ManagedObjectStorage#type}

---

##### `uuid`<sup>Optional</sup> <a name="uuid" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

Private network uuid. For public networks the field should be omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/resources/managed_object_storage#uuid ManagedObjectStorage#uuid}

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedObjectStorageEndpointList <a name="ManagedObjectStorageEndpointList" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_object_storage.ManagedObjectStorageEndpointList;

new ManagedObjectStorageEndpointList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.get"></a>

```java
public ManagedObjectStorageEndpointOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ManagedObjectStorageEndpointOutputReference <a name="ManagedObjectStorageEndpointOutputReference" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_object_storage.ManagedObjectStorageEndpointOutputReference;

new ManagedObjectStorageEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpoint">ManagedObjectStorageEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.property.internalValue"></a>

```java
public ManagedObjectStorageEndpoint getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpoint">ManagedObjectStorageEndpoint</a>

---


### ManagedObjectStorageNetworkList <a name="ManagedObjectStorageNetworkList" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_object_storage.ManagedObjectStorageNetworkList;

new ManagedObjectStorageNetworkList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.get"></a>

```java
public ManagedObjectStorageNetworkOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork">ManagedObjectStorageNetwork</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork">ManagedObjectStorageNetwork</a>>

---


### ManagedObjectStorageNetworkOutputReference <a name="ManagedObjectStorageNetworkOutputReference" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_object_storage.ManagedObjectStorageNetworkOutputReference;

new ManagedObjectStorageNetworkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.resetUuid">resetUuid</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUuid` <a name="resetUuid" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.resetUuid"></a>

```java
public void resetUuid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.familyInput">familyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.uuidInput">uuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.family">family</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.uuid">uuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork">ManagedObjectStorageNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `familyInput`<sup>Optional</sup> <a name="familyInput" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.familyInput"></a>

```java
public java.lang.String getFamilyInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `uuidInput`<sup>Optional</sup> <a name="uuidInput" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.uuidInput"></a>

```java
public java.lang.String getUuidInput();
```

- *Type:* java.lang.String

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.family"></a>

```java
public java.lang.String getFamily();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork">ManagedObjectStorageNetwork</a>

---



